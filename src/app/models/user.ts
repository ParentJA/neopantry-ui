export class User {
  static create(data: any): User {
    return new User(
      data.id,
      data.username,
      data.first_name,
      data.last_name,
      data.photo
    );
  }

  static getUser(): User {
    let userData: string = localStorage.getItem('neopantry.user');
    if (userData) {
      return User.create(JSON.parse(userData));
    }
    return null;
  }

  constructor(
    public id: number,
    public username: string,
    public first_name: string,
    public last_name: string,
    public photo: any
  ) {}
}
