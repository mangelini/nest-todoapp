import { BadRequestException } from '@nestjs/common';

class UserAlreadyExistsException extends BadRequestException {
  constructor(username: string) {
    super(`User with ${username} username already exists`);
  }
}

export default UserAlreadyExistsException;
