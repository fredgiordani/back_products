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

  // Configuration de CORS
  app.enableCors({
    origin: 'http://localhost:3000', // Remplacez par l'URL de votre application frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  try {
    await app.listen(5000);
    console.log('Écoute sur le port 5000');
  } catch (error) {
    console.error('Erreur au démarrage du serveur:', error);
  }
}

bootstrap();





