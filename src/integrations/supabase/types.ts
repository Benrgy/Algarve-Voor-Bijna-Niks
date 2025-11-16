export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      content_sources: {
        Row: {
          created_at: string | null
          id: string
          name: string
          type: string
          url: string | null
          verified: boolean | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          type: string
          url?: string | null
          verified?: boolean | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          type?: string
          url?: string | null
          verified?: boolean | null
        }
        Relationships: []
      }
      destination_images: {
        Row: {
          caption: string | null
          category: string
          created_at: string
          destination_id: string | null
          display_order: number | null
          id: string
          image_alt: string
          image_url: string
          photographer_credit: string | null
        }
        Insert: {
          caption?: string | null
          category: string
          created_at?: string
          destination_id?: string | null
          display_order?: number | null
          id?: string
          image_alt: string
          image_url: string
          photographer_credit?: string | null
        }
        Update: {
          caption?: string | null
          category?: string
          created_at?: string
          destination_id?: string | null
          display_order?: number | null
          id?: string
          image_alt?: string
          image_url?: string
          photographer_credit?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "destination_images_destination_id_fkey"
            columns: ["destination_id"]
            isOneToOne: false
            referencedRelation: "destinations"
            referencedColumns: ["id"]
          },
        ]
      }
      destinations: {
        Row: {
          accessibility_info: string | null
          attractions: string | null
          average_costs: Json | null
          beach_guides: string | null
          best_for: string[] | null
          best_time_to_visit: string | null
          budget_tips: string | null
          content_source_id: string | null
          created_at: string
          dining_scene: string | null
          hero_image: string | null
          hero_image_alt: string | null
          hidden_gems: string | null
          highlights: string[] | null
          historical_context: string | null
          id: string
          last_updated_by: string | null
          local_cuisine: string | null
          local_stories: string | null
          luxury_options: string | null
          meta_description: string | null
          name: string
          practical_tips: string | null
          published: boolean | null
          rating: number | null
          region: string
          seasonal_activities: Json | null
          short_description: string | null
          slug: string
          title: string
          transportation: string | null
          updated_at: string
          verified_at: string | null
          verified_by: string | null
          visitor_count: string | null
        }
        Insert: {
          accessibility_info?: string | null
          attractions?: string | null
          average_costs?: Json | null
          beach_guides?: string | null
          best_for?: string[] | null
          best_time_to_visit?: string | null
          budget_tips?: string | null
          content_source_id?: string | null
          created_at?: string
          dining_scene?: string | null
          hero_image?: string | null
          hero_image_alt?: string | null
          hidden_gems?: string | null
          highlights?: string[] | null
          historical_context?: string | null
          id?: string
          last_updated_by?: string | null
          local_cuisine?: string | null
          local_stories?: string | null
          luxury_options?: string | null
          meta_description?: string | null
          name: string
          practical_tips?: string | null
          published?: boolean | null
          rating?: number | null
          region: string
          seasonal_activities?: Json | null
          short_description?: string | null
          slug: string
          title: string
          transportation?: string | null
          updated_at?: string
          verified_at?: string | null
          verified_by?: string | null
          visitor_count?: string | null
        }
        Update: {
          accessibility_info?: string | null
          attractions?: string | null
          average_costs?: Json | null
          beach_guides?: string | null
          best_for?: string[] | null
          best_time_to_visit?: string | null
          budget_tips?: string | null
          content_source_id?: string | null
          created_at?: string
          dining_scene?: string | null
          hero_image?: string | null
          hero_image_alt?: string | null
          hidden_gems?: string | null
          highlights?: string[] | null
          historical_context?: string | null
          id?: string
          last_updated_by?: string | null
          local_cuisine?: string | null
          local_stories?: string | null
          luxury_options?: string | null
          meta_description?: string | null
          name?: string
          practical_tips?: string | null
          published?: boolean | null
          rating?: number | null
          region?: string
          seasonal_activities?: Json | null
          short_description?: string | null
          slug?: string
          title?: string
          transportation?: string | null
          updated_at?: string
          verified_at?: string | null
          verified_by?: string | null
          visitor_count?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "destinations_content_source_id_fkey"
            columns: ["content_source_id"]
            isOneToOne: false
            referencedRelation: "content_sources"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "destinations_last_updated_by_fkey"
            columns: ["last_updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "destinations_verified_by_fkey"
            columns: ["verified_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      expert_profiles: {
        Row: {
          avatar_url: string | null
          bio: string
          created_at: string
          favorite_tip: string | null
          id: string
          location: string
          name: string
          role: string
          slug: string
          specialty: string
          updated_at: string
          verification_status: string | null
          years_experience: number
        }
        Insert: {
          avatar_url?: string | null
          bio: string
          created_at?: string
          favorite_tip?: string | null
          id?: string
          location: string
          name: string
          role: string
          slug: string
          specialty: string
          updated_at?: string
          verification_status?: string | null
          years_experience: number
        }
        Update: {
          avatar_url?: string | null
          bio?: string
          created_at?: string
          favorite_tip?: string | null
          id?: string
          location?: string
          name?: string
          role?: string
          slug?: string
          specialty?: string
          updated_at?: string
          verification_status?: string | null
          years_experience?: number
        }
        Relationships: []
      }
      insider_tips: {
        Row: {
          category: string
          content: string
          created_at: string
          destination_id: string | null
          expert_id: string | null
          id: string
          practical_info: Json | null
          seasonal_relevance: string[] | null
          tip_type: string
          title: string
          updated_at: string
        }
        Insert: {
          category: string
          content: string
          created_at?: string
          destination_id?: string | null
          expert_id?: string | null
          id?: string
          practical_info?: Json | null
          seasonal_relevance?: string[] | null
          tip_type: string
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          content?: string
          created_at?: string
          destination_id?: string | null
          expert_id?: string | null
          id?: string
          practical_info?: Json | null
          seasonal_relevance?: string[] | null
          tip_type?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "insider_tips_destination_id_fkey"
            columns: ["destination_id"]
            isOneToOne: false
            referencedRelation: "destinations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "insider_tips_expert_id_fkey"
            columns: ["expert_id"]
            isOneToOne: false
            referencedRelation: "expert_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      posts: {
        Row: {
          author_id: string | null
          category: string | null
          content: string | null
          content_source_id: string | null
          created_at: string
          excerpt: string | null
          featured_image: string | null
          featured_image_alt: string | null
          id: string
          last_updated_by: string | null
          meta_description: string | null
          meta_title: string | null
          published_at: string | null
          slug: string
          status: string | null
          title: string
          updated_at: string
          verified_at: string | null
          verified_by: string | null
        }
        Insert: {
          author_id?: string | null
          category?: string | null
          content?: string | null
          content_source_id?: string | null
          created_at?: string
          excerpt?: string | null
          featured_image?: string | null
          featured_image_alt?: string | null
          id?: string
          last_updated_by?: string | null
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          slug: string
          status?: string | null
          title: string
          updated_at?: string
          verified_at?: string | null
          verified_by?: string | null
        }
        Update: {
          author_id?: string | null
          category?: string | null
          content?: string | null
          content_source_id?: string | null
          created_at?: string
          excerpt?: string | null
          featured_image?: string | null
          featured_image_alt?: string | null
          id?: string
          last_updated_by?: string | null
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          slug?: string
          status?: string | null
          title?: string
          updated_at?: string
          verified_at?: string | null
          verified_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_content_source_id_fkey"
            columns: ["content_source_id"]
            isOneToOne: false
            referencedRelation: "content_sources"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_last_updated_by_fkey"
            columns: ["last_updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_verified_by_fkey"
            columns: ["verified_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
