import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bookings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  email: string;

  @Column()
  date: string;
}
