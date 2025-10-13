import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Award } from "lucide-react";

interface ExpertProfile {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  years_experience: number;
  location: string;
  avatar_url?: string;
  verification_status?: string;
}

interface ExpertProfileCardProps {
  expert: ExpertProfile;
}

export const ExpertProfileCard = ({ expert }: ExpertProfileCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <span className="text-2xl font-bold text-primary">
              {expert.name.charAt(0)}
            </span>
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <h3 className="font-semibold text-lg">{expert.name}</h3>
                <p className="text-sm text-muted-foreground">{expert.role}</p>
              </div>
              {expert.verification_status === 'verified' && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  Verified
                </Badge>
              )}
            </div>
            <Badge variant="outline" className="mb-3">
              {expert.specialty}
            </Badge>
            <p className="text-sm text-muted-foreground mb-3">{expert.bio}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {expert.location}
              </div>
              <div>
                {expert.years_experience} years experience
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
