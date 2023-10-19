import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import UserModel from './user.model';
import UsersRepository from './users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async create(registerUserDto: CreateUserDto): Promise<UserModel | undefined> {
    return this.usersRepository.create(registerUserDto);
  }

  async findOne(username: string): Promise<UserModel | undefined> {
    return this.usersRepository.getByUsername(username);
  }
}
