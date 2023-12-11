import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductModule } from './products/product.module';
import { ProductService } from './products/product.service'; // Importez votre service ProductService
import { PrismaService } from './prisma.service';
import { AppService } from './app.service';

@Module({
  imports: [ProductModule],
  controllers: [AppController],
  providers: [
    ProductService, PrismaService,AppService // Ajoutez votre service ici
    // Autres services le cas échéant
  ],
})
export class AppModule {}
