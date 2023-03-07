import { ProductRepository } from './../../repositories/productRepository/ProductRepository';

interface IRequest {
  name: string;
  categoryId: number;
}

export class GetAllProductsService {
  constructor(private productRepository: ProductRepository) {}

  execute(): IRequest[] {
    return this.productRepository.getAll();
  }
}
