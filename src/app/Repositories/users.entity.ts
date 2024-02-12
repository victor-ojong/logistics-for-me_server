import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Bookings } from './bookings.entity';
import { Products } from './products.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @ManyToMany(() => Bookings, (bookings) => bookings.users)
  bookings: Bookings[];
}
