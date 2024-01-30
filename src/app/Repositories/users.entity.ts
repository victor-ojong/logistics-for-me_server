import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Bookings } from './bookings.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @ManyToMany(() => Bookings, (bookings) => bookings.email, { cascade: true })
  @JoinTable()
  bookings: Bookings[];
}
