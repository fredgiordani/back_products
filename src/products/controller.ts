import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(): Product[] {
    console.log("ok");
    
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Product {
    console.log(this.productService.findOne(id));
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() product: Product): Product {
    console.log("product", product);
  
    return this.productService.create(product);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    this.productService.delete(id);
  }
}
