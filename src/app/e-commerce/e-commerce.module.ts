import { Module } from '@nestjs/common';
import { ECommerceService } from './e-commerce.service';
import { ECommerceController } from './e-commerce.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from '../Repositories/products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Products])],
  providers: [ECommerceService],
  controllers: [ECommerceController],
})
export class ECommerceModule {}
