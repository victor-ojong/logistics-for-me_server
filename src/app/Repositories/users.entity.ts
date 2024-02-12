import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Bookings } from './bookings.entity';

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

  @ManyToMany(() => Bookings, (bookings) => bookings.user, { cascade: true })
  bookings: Bookings[];
}
