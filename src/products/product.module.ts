import { Module } from '@nestjs/common';
import { ProductController } from './controller';
import { ProductService } from './product.service';
import { PrismaService } from '../prisma.service'; // Importez PrismaService

@Module({
  controllers: [ProductController],
  providers: [ProductService, PrismaService], // Assurez-vous que PrismaService est fourni ici
})
export class ProductModule {}


