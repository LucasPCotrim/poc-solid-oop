import prisma from '../../database/db';
import { Product } from '../../models/Product';
import { AbstractProductRepository } from './abstractProductRepository';

export class ProductRepository extends AbstractProductRepository {
  constructor() {
    super();
  }

  async getAll(): Promise<Product[]> {
    return await prisma.product.findMany();
  }
}
