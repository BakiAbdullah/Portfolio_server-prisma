export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  blogs: string[];
  createdAt: Date;
  updatedAt: Date;
}
