import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Connexion à la base de données SQLite en utilisant Prisma
  const prisma = new PrismaClient();

  try {
    await prisma.$connect();
    console.log('Connecté à la base de données SQLite.');
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error);
  }

  try {
    await app.listen(5000)
    console.log("ecoute sur le port 5000");
    
  } catch (error) {
    console.error("err",error);
  }
  ;
  
  
}
bootstrap();




