import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController], //estou dizendo quem são os controllers e quem são os providers que tenho a minha disposição mas ainda não estou utilizando
  providers: [AuthService],
})
export class AuthModule {}
