import { Controller, Get, Post, Delete, Param, Body, NotFoundException, UseInterceptors } from '@nestjs/common';
import { ProductService } from './product.service';
import { Products } from '.prisma/client';
import { HttpErrorInterceptor } from './http-error.interceptor'; // Créez un intercepteur pour gérer les erreurs HTTP globalement

@UseInterceptors(HttpErrorInterceptor) // Utilisez un intercepteur pour gérer les erreurs HTTP
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<Products[]> {
    return this.productService.findAll();
  }

  @Get(':id')
async findOne(@Param('id') id: string): Promise<Products> {
  const productId = Number(id); // Convertir la chaîne de caractères 'id' en nombre
  const product = await this.productService.findOne(productId);
  if (!product) {
    throw new NotFoundException(`Product with ID ${id} not found`);
  }
  return product;
}


  @Post()
  async create(@Body() productData: Partial<Products>): Promise<Products> {
    console.log("productData====>",productData);
    
    return this.productService.createProduct(productData);
  }

  @Delete(':id')
async remove(@Param('id') id: string): Promise<void> {
  const productId = Number(id); // Convertir la chaîne de caractères 'id' en nombre
  await this.productService.delete(productId);
}

}
