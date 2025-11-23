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
      chat_logs: {
        Row: {
          actions: Json | null
          assistant_message: string
          created_at: string
          had_context: boolean | null
          id: string
          message_timestamp: string
          session_id: string
          sources: Json | null
          user_agent: string | null
          user_ip: string | null
          user_message: string
        }
        Insert: {
          actions?: Json | null
          assistant_message: string
          created_at?: string
          had_context?: boolean | null
          id?: string
          message_timestamp?: string
          session_id: string
          sources?: Json | null
          user_agent?: string | null
          user_ip?: string | null
          user_message: string
        }
        Update: {
          actions?: Json | null
          assistant_message?: string
          created_at?: string
          had_context?: boolean | null
          id?: string
          message_timestamp?: string
          session_id?: string
          sources?: Json | null
          user_agent?: string | null
          user_ip?: string | null
          user_message?: string
        }
        Relationships: []
      }
      contact_inquiries: {
        Row: {
          created_at: string
          email: string
          file_urls: string[] | null
          id: string
          message: string | null
          name: string
          project_type: string | null
          status: string
          timeline: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          file_urls?: string[] | null
          id?: string
          message?: string | null
          name: string
          project_type?: string | null
          status?: string
          timeline?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          file_urls?: string[] | null
          id?: string
          message?: string | null
          name?: string
          project_type?: string | null
          status?: string
          timeline?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      knowledge_base: {
        Row: {
          category: string
          content: string
          created_at: string
          embedding: string | null
          id: string
          is_active: boolean
          metadata: Json | null
          page_url: string | null
          title: string
          updated_at: string
        }
        Insert: {
          category: string
          content: string
          created_at?: string
          embedding?: string | null
          id?: string
          is_active?: boolean
          metadata?: Json | null
          page_url?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          content?: string
          created_at?: string
          embedding?: string | null
          id?: string
          is_active?: boolean
          metadata?: Json | null
          page_url?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      newsletter_subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string
          source: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name: string
          source?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string
          source?: string | null
        }
        Relationships: []
      }
      order_items: {
        Row: {
          color: string
          created_at: string
          dimensions: Json
          file_name: string
          file_url: string
          id: string
          infill: number
          material: string
          order_id: string
          print_time: number
          quality: string
          quantity: number
          total_price: number
          unit_price: number
          volume: number
        }
        Insert: {
          color: string
          created_at?: string
          dimensions: Json
          file_name: string
          file_url: string
          id?: string
          infill: number
          material: string
          order_id: string
          print_time: number
          quality: string
          quantity?: number
          total_price: number
          unit_price: number
          volume: number
        }
        Update: {
          color?: string
          created_at?: string
          dimensions?: Json
          file_name?: string
          file_url?: string
          id?: string
          infill?: number
          material?: string
          order_id?: string
          print_time?: number
          quality?: string
          quantity?: number
          total_price?: number
          unit_price?: number
          volume?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string
          customer_email: string | null
          customer_name: string | null
          express_service: boolean
          id: string
          notes: string | null
          post_processing: Json | null
          status: Database["public"]["Enums"]["order_status"]
          stripe_checkout_session_id: string | null
          stripe_payment_intent_id: string | null
          total_price: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          customer_email?: string | null
          customer_name?: string | null
          express_service?: boolean
          id?: string
          notes?: string | null
          post_processing?: Json | null
          status?: Database["public"]["Enums"]["order_status"]
          stripe_checkout_session_id?: string | null
          stripe_payment_intent_id?: string | null
          total_price: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          customer_email?: string | null
          customer_name?: string | null
          express_service?: boolean
          id?: string
          notes?: string | null
          post_processing?: Json | null
          status?: Database["public"]["Enums"]["order_status"]
          stripe_checkout_session_id?: string | null
          stripe_payment_intent_id?: string | null
          total_price?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          complexity_level: number | null
          created_at: string
          description: string | null
          estimated_price: number | null
          file_name: string
          file_size: number
          file_url: string
          final_price: number | null
          id: string
          material: string | null
          name: string
          payment_intent_id: string | null
          quote_file_url: string | null
          status: Database["public"]["Enums"]["project_status"]
          updated_at: string
          user_id: string
          volume_cm3: number | null
        }
        Insert: {
          complexity_level?: number | null
          created_at?: string
          description?: string | null
          estimated_price?: number | null
          file_name: string
          file_size: number
          file_url: string
          final_price?: number | null
          id?: string
          material?: string | null
          name: string
          payment_intent_id?: string | null
          quote_file_url?: string | null
          status?: Database["public"]["Enums"]["project_status"]
          updated_at?: string
          user_id: string
          volume_cm3?: number | null
        }
        Update: {
          complexity_level?: number | null
          created_at?: string
          description?: string | null
          estimated_price?: number | null
          file_name?: string
          file_size?: number
          file_url?: string
          final_price?: number | null
          id?: string
          material?: string | null
          name?: string
          payment_intent_id?: string | null
          quote_file_url?: string | null
          status?: Database["public"]["Enums"]["project_status"]
          updated_at?: string
          user_id?: string
          volume_cm3?: number | null
        }
        Relationships: []
      }
      sample_requests: {
        Row: {
          company_name: string
          contact_person: string
          created_at: string
          email: string
          file_urls: string[] | null
          id: string
          material: string
          phone: string
          planned_quantity: string
          project_description: string
          status: string
          timeline: string
          updated_at: string
        }
        Insert: {
          company_name: string
          contact_person: string
          created_at?: string
          email: string
          file_urls?: string[] | null
          id?: string
          material: string
          phone: string
          planned_quantity: string
          project_description: string
          status?: string
          timeline: string
          updated_at?: string
        }
        Update: {
          company_name?: string
          contact_person?: string
          created_at?: string
          email?: string
          file_urls?: string[] | null
          id?: string
          material?: string
          phone?: string
          planned_quantity?: string
          project_description?: string
          status?: string
          timeline?: string
          updated_at?: string
        }
        Relationships: []
      }
      slicing_jobs: {
        Row: {
          calculated_time_hours: number | null
          created_at: string
          error_message: string | null
          estimated_time_hours: number | null
          file_name: string
          file_url: string
          id: string
          material: string | null
          metadata: Json | null
          status: string
          updated_at: string
        }
        Insert: {
          calculated_time_hours?: number | null
          created_at?: string
          error_message?: string | null
          estimated_time_hours?: number | null
          file_name: string
          file_url: string
          id?: string
          material?: string | null
          metadata?: Json | null
          status?: string
          updated_at?: string
        }
        Update: {
          calculated_time_hours?: number | null
          created_at?: string
          error_message?: string | null
          estimated_time_hours?: number | null
          file_name?: string
          file_url?: string
          id?: string
          material?: string | null
          metadata?: Json | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      chat_analytics: {
        Row: {
          different_answers: string[] | null
          last_asked: string | null
          question_count: number | null
          user_message: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_admin: { Args: never; Returns: boolean }
      search_knowledge_base: {
        Args: {
          match_count?: number
          match_threshold?: number
          query_embedding: string
        }
        Returns: {
          category: string
          content: string
          id: string
          page_url: string
          similarity: number
          title: string
        }[]
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
      order_status:
        | "pending"
        | "paid"
        | "processing"
        | "completed"
        | "cancelled"
      project_status:
        | "uploaded"
        | "analyzing"
        | "quote_ready"
        | "quote_sent"
        | "paid"
        | "in_production"
        | "completed"
        | "cancelled"
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
      order_status: ["pending", "paid", "processing", "completed", "cancelled"],
      project_status: [
        "uploaded",
        "analyzing",
        "quote_ready",
        "quote_sent",
        "paid",
        "in_production",
        "completed",
        "cancelled",
      ],
    },
  },
} as const
