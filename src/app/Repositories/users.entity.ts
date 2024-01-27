import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Bookings } from './bookings.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  @Exclude()
  password: string;

  @ManyToMany(() => Bookings, (bookings) => bookings.email, { cascade: true })
  @JoinTable()
  bookings: Bookings[];
}
