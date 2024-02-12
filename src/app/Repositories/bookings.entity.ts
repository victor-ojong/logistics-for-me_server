import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './users.entity';

@Entity()
export class Bookings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'price' })
  price: number;

  @Column({ name: 'description', length: 180, nullable: true })
  description: string;

  @Column({ name: 'calculated Value', nullable: true })
  calculatedValue: number;

  @Column({ name: 'pick Up Address', length: 180, nullable: true })
  pickUpAddress: string;

  @Column({ name: ' drop Off Address', length: 180, nullable: true })
  dropOffAddress: string;

  @Column({ name: ' date', length: 180, nullable: true })
  date: string;

  @ManyToOne(() => User, (users) => users.bookings)
  users: User;
}
