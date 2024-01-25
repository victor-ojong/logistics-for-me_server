import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './categories.types';

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
}
