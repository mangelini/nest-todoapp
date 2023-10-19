import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './register-user.dto';

// TODO actual db user implementation
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async create(registerUserDto: RegisterUserDto) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username).username;
  }
}
