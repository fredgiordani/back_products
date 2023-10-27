import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './products/controller'; // Supprimez les crochets
import { ProductModule } from './products/product.module'; // Supprimez les crochets
import { ProductService } from './products/product.service';

@Module({
  imports: [ProductModule],
  controllers: [AppController, ProductController], // Supprimez les crochets
  providers: [AppService, ProductService],
})
export class AppModule {}
