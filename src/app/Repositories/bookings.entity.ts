import { Entity } from 'typeorm';

@Entity()
export class Bookings {
  id: number;
  price: number;
  email: string;
  date: string;
}
