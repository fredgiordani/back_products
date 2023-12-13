import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service'; 

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.findAllProducts();
  }

  async findOne(id: number) {
    return this.prismaService.findProductById(id);
  }

  async createProduct(data: any) {
    console.log(data);
    const price = parseFloat(data.price);
    
    return this.prismaService.createProduct({
      name: data.name,
      price: price,
      description: data.description,
      color: data.color
      // Ajoutez d'autres champs du modèle de produit au besoin
    });
      
  }

  async delete(id: number) {
    return this.prismaService.deleteProduct(id);
  }
}
