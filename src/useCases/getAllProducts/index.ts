import { ProductRepository } from '../../repositories/productRepository/ProductRepository';
import { GetAllProductsController } from './getAllProductsController';
import { GetAllProductsService } from './GetAllProductsService';

const productRepository = new ProductRepository();
const getAllProductsService = new GetAllProductsService(productRepository);

export const getAllProductsController = new GetAllProductsController(
  getAllProductsService
);
