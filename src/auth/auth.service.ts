import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(username: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }

  async signUp(userDto: CreateUserDto): Promise<any> {
    const user = await this.usersService.create(userDto);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
