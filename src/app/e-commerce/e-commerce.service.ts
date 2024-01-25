import { Body, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from '../Repositories/products.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ECommerceService {
  constructor(@InjectRepository(Products) private repo: Repository<Products>) {}
  @Post()
  createProduct(@Body() product: any) {
    return product;
  }
}
