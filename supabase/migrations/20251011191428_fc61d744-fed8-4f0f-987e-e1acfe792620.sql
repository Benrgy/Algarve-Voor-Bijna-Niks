-- Create destinations table for comprehensive 2000+ word guides
CREATE TABLE public.destinations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  region TEXT NOT NULL,
  title TEXT NOT NULL,
  meta_description TEXT,
  hero_image TEXT,
  hero_image_alt TEXT,
  short_description TEXT,
  
  -- Main content sections (2000+ words total)
  historical_context TEXT,
  beach_guides TEXT,
  attractions TEXT,
  dining_scene TEXT,
  transportation TEXT,
  budget_tips TEXT,
  luxury_options TEXT,
  hidden_gems TEXT,
  
  -- Practical information
  best_time_to_visit TEXT,
  average_costs JSONB,
  accessibility_info TEXT,
  
  -- SEO and metadata
  rating DECIMAL(2,1) DEFAULT 4.5,
  visitor_count TEXT,
  best_for TEXT[],
  highlights TEXT[],
  
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  published BOOLEAN DEFAULT false
);

-- Create expert profiles table
CREATE TABLE public.expert_profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  specialty TEXT NOT NULL,
  bio TEXT NOT NULL,
  years_experience INTEGER NOT NULL,
  location TEXT NOT NULL,
  avatar_url TEXT,
  favorite_tip TEXT,
  verification_status TEXT DEFAULT 'verified',
  
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create insider tips table
CREATE TABLE public.insider_tips (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  destination_id UUID REFERENCES public.destinations(id) ON DELETE CASCADE,
  expert_id UUID REFERENCES public.expert_profiles(id) ON DELETE SET NULL,
  category TEXT NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  practical_info JSONB,
  tip_type TEXT NOT NULL,
  seasonal_relevance TEXT[],
  
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create destination images table
CREATE TABLE public.destination_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  destination_id UUID REFERENCES public.destinations(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  image_alt TEXT NOT NULL,
  caption TEXT,
  category TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  photographer_credit TEXT,
  
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.expert_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.insider_tips ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.destination_images ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Published destinations are viewable by everyone"
ON public.destinations FOR SELECT
USING (published = true);

CREATE POLICY "Expert profiles are viewable by everyone"
ON public.expert_profiles FOR SELECT
USING (true);

CREATE POLICY "Insider tips are viewable by everyone"
ON public.insider_tips FOR SELECT
USING (true);

CREATE POLICY "Destination images are viewable by everyone"
ON public.destination_images FOR SELECT
USING (true);

-- Create indexes for performance
CREATE INDEX idx_destinations_slug ON public.destinations(slug);
CREATE INDEX idx_destinations_region ON public.destinations(region);
CREATE INDEX idx_destinations_published ON public.destinations(published);
CREATE INDEX idx_expert_profiles_slug ON public.expert_profiles(slug);
CREATE INDEX idx_insider_tips_destination ON public.insider_tips(destination_id);
CREATE INDEX idx_insider_tips_expert ON public.insider_tips(expert_id);
CREATE INDEX idx_destination_images_destination ON public.destination_images(destination_id);

-- Create trigger for updated_at
CREATE TRIGGER update_destinations_updated_at
BEFORE UPDATE ON public.destinations
FOR EACH ROW
EXECUTE FUNCTION public.update_posts_updated_at();

CREATE TRIGGER update_expert_profiles_updated_at
BEFORE UPDATE ON public.expert_profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_posts_updated_at();