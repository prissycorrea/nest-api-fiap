import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  async createProduct(req): Promise<string> {
    return 'Produto criado com sucesso!';
  }

  async findAll() {
    return 'Lista de produtos';
  }

  async findName(name: string) {
    return `Produto ${name}`;
  }

  async findOne(price: string) {
    return `Produto ${price}`;
  }

  async findDescription(description: string) {
    return `Produto ${description}`;
  }
}
