import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

// TODO actual db user implementation
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
    },
    {
      userId: 2,
      username: 'maria',
    },
  ];

  async create(registerUserDto: CreateUserDto): Promise<User | undefined> {
    const { username } = registerUserDto;
    return undefined; //TODO
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
