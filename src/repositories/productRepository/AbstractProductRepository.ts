import { Product } from '../../models/Product';

export abstract class AbstractProductRepository {
  abstract create({ name, categoryId }: Product): void;
  abstract getAll(): Promise<Product[]>;
}
