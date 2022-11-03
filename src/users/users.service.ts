import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { users } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async getUserById(id: string) {
    const user = await this.prisma.users.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!user) {
      throw new HttpException('Usuário não encontrado.', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async verifyUserExists(email: string): Promise<boolean> {
    const user = await this.prisma.users.findUnique({
      //procure alguém onde o email seja igual ao email que eu passei
      where: {
        email,
      },
    });
    return user ? true : false; //se não existir, retorna falso. Se existir, retorna verdadeiro
  }
  async createUser(data): Promise<users> {
    //essa função retorna uma promessa, porque tem uma intenção de cadastrar um usuário, mas nao sei se está certo, se estiver certo retorna o usuário, se não estiver certo retorna um erro
    const { name, email, password } = data;
    const checkUser = await this.verifyUserExists(email);

    if (!checkUser) {
      const user = await this.prisma.users.create({
        data: {
          name, //o banco entende name: name, se fosse outro nome atribuido, deveria ser name: outroNome
          email,
          password,
        },
      });

      if (!user) {
        throw new Error('Erro ao criar usuário.');
      }
      return user;
    } else {
      throw new HttpException('Usuário já existe.', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    return this.prisma.users.findMany();
  }

  async findOne(id: string) {
    return this.prisma.users.findUnique({
      where: {
        id: Number(id),
      },
    });
  }

  async update(id: string, req) {
    //carregue os dados do usuário cujo id foi informado
    const user = await this.getUserById(id);
    //extraindo as novas informações para alterar o usuário
    const { name, email, password } = req;
    const updateUser = await this.prisma.users.update({
      where: {
        id: Number(id),
      },
      data: {
        name: name ? name : user.name,
        email: email ? email : user.email,
        password: password ? password : user.password,
      },
    });

    if (!updateUser) {
      throw new HttpException(
        'Erro ao atualizar usuário.',
        HttpStatus.BAD_REQUEST,
      );
    }
    return { msg: `Usuário ${updateUser.name} atualizado com sucesso.` };
  }

  async remove(id: string) {
    const user = await this.getUserById(id);
    const deleteUser = await this.prisma.users.delete({
      where: {
        id: Number(id),
      },
    });

    if (!deleteUser) {
      throw new HttpException(
        'Erro ao deletar usuário.',
        HttpStatus.BAD_REQUEST,
      );
    }
    return `Usuário ${user.name} excluído com sucesso.`;
  }
}
