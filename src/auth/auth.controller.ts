import { AuthService } from './auth.service';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';

//http://localhost:3000/auth
@Controller('auth')
export class AuthController {
  //injeção de dependência - contectou este arquivo com o app.service.ts
  constructor(private readonly authService: AuthService) {}
  //http://localhost:3000/auth/login - quando alguem enviar algo para isso, o que está abaixo será executado
  @Post('login')
  async validaLogin(@Body() req) {
    const { login, password } = req;

    if (!login) {
      //return { error: true, msg: 'Login não informado' };
      throw new HttpException('Login não ENCONTRADO', HttpStatus.FORBIDDEN); //throw estoura um erro ou exceção, faz o papel do return, para o processamento
    }

    console.log('login', login);
    console.log('password', password);
    return this.authService.validaLogin(login, password);
  }
}
