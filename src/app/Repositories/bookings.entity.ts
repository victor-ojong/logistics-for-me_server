import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Bookings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerName: string;

  @Column()
  email: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  calculatedValue: number;

  @Column()
  phone: string;

  @Column()
  pickUpAdress: string;

  @Column()
  dropOffAdress: string;

  @CreateDateColumn({ type: 'date' })
  date: Date;
}
