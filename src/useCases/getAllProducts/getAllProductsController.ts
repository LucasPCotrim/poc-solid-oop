import { Request, Response } from 'express';
import { GetAllProductsService } from './GetAllProductsService';

export class GetAllProductsController {
  constructor(private getAllProductsService: GetAllProductsService) {}

  async handle(req: Request, res: Response): Response {
    const products = await this.getAllProductsService.execute();

    return res.status(200).send(products);
  }
}
