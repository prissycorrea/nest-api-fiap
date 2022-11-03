import { Injectable } from '@nestjs/common';

//é este arquivo que vai executar a lógica da aplicação
@Injectable() //posso injetar no controller, como se fosse um plugin
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
