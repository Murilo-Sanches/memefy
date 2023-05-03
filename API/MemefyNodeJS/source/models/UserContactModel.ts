export interface UserContactModel {
  id: number;
  email: string;
  email_confirmed: boolean;
  mobile_number: string | null;
  mobile_confirmed: boolean;
  first_name: string;
  last_name: string;
  user_id: number;
  created_at: Date;
  updated_at: Date;
}
