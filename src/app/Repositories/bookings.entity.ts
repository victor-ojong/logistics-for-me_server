import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './users.entity';

@Entity()
export class Bookings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'customerName', length: 180, nullable: true })
  customerName: string;

  @Column()
  email: string;

  @Column({ name: 'price' })
  price: number;

  @Column({ name: 'description', length: 180, nullable: true })
  description: string;

  @Column({ name: 'calculatedValue', nullable: true })
  calculatedValue: number;

  @Column({ name: 'phone', length: 180, nullable: true })
  phone: string;

  @Column({ name: 'pickUpAdress', length: 180, nullable: true })
  pickUpAdress: string;

  @Column({ name: ' dropOffAdress', length: 180, nullable: true })
  dropOffAdress: string;

  @Column({ name: ' date', length: 180, nullable: true })
  date: string;

  @ManyToMany(() => User, (users) => users.bookings)
  users: User[];
}
