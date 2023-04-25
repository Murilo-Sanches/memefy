export class UserDTO {
  constructor(
    readonly id: number,
    readonly username: string,
    readonly profile_picture: string,
    readonly profile_background: string,
    readonly profile_name: string,
    readonly created_at: Date,
    readonly updated_at: Date
  ) {}
}
