// product.module.ts
import { Module } from '@nestjs/common';
import { ProductController } from './controller';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
