import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './categories.types';
import { User } from './users.entity';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  description: string;

  @Column()
  productId: string;

  @Column()
  productCategory: Category;

  // @Column()
  // @ManyToOne(() => User, (users) => users.products)
  // users: User[];
}
