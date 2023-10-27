// product.service.ts
import { Injectable } from '@nestjs/common';
import { Product } from './product.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: string): Product {
    return this.products.find(product => product.id === id);
  }

  create(product: Product): Product {
    // Générez un nouvel ID pour le produit en fonction de la longueur du tableau + 1
    // console.log(product)
    // product.id = this.products.length + 1;
    // console.log(product)


    // Générez un nouvel ID unique à l'aide de uuidv4()
    product.id = uuidv4();
    
    
    // Ajoutez le produit à la liste
    this.products.push(product);
    
    return product;
  }

  delete(id: string): void {
    // Utilisez `filter` pour supprimer l'élément du tableau
    this.products = this.products.filter(product => product.id !== id);
  }
}
