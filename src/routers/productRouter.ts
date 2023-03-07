import { Router } from 'express';
import { getAllProductsController } from './../useCases/getAllProducts/index';

const productRouter = Router();

productRouter.get('/products', (req, res) => {
  getAllProductsController.handle(req, res);
});

// productRouter.post("/products", (req, res) =>
//   createProductController.handle(req, res)
// );

// productRouter.put("/products/:id", (req, res) =>
//   updateProductController.handle(req, res)
// );

// productRouter.delete("/products/:id", (req, res) =>
//   deleteProductController.handle(req, res)
// );

export default productRouter;
