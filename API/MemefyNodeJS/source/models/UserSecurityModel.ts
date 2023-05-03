export interface UserSecurityModel {
  id: number;
  password: string;
  recovery_email: string | null;
  password_changed_at: Date | null;
  password_reset_token: string | null;
  password_reset_expires: Date | null;
  two_factor_enabled: boolean;
  two_factor_secret: string | null;
  last_login: Date;
  user_id: number;
  created_at: Date;
  updated_at: Date;
}
