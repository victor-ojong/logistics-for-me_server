import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PopularRoutes {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  route: string;

  @Column()
  price: number;

  @Column()
  description: string;
}
