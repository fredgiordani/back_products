import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class PrismaService {
  constructor() {}

  async findAllProducts() {
    return prisma.products.findMany();
  }

  async findProductById(id: number) {
    return prisma.products.findUnique({ where: { id } });
  }

  async createProduct(data: any) {
    console.log("je suis dans createProduct",data);
    const price = parseFloat(data.price);
    return prisma.products.create({
      data: {
        name: data.name,
        price: price,
        description: data.description,
        color: data.color, 
        // Ajoutez d'autres champs du modèle de produit au besoin
      },
    });
  }
  

  async deleteProduct(id: number) {
    return prisma.products.delete({ where: { id } });
  }
}

export { prisma, PrismaService };




