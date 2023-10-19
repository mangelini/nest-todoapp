import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import UserModel from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import PostgresErrorCode from '../database/postgresErrorCode.enum';
import UserAlreadyExistsException from './exceptions/userAlreadyExists.exception';
import { isDatabaseError } from '../types/databaseError';

@Injectable()
class UsersRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  async getById(id: number) {
    const dbResponse = await this.databaseService.runQuery(
      `SELECT * FROM users WHERE users.id=$1`,
      [id],
    );

    const entity = dbResponse.rows[0];
    if (!entity) throw new NotFoundException();

    return new UserModel(entity);
  }

  async getByUsername(username: string): Promise<UserModel | undefined> {
    const dbResponse = await this.databaseService.runQuery(
      `SELECT * FROM users WHERE users.username=$1`,
      [username],
    );

    const entity = dbResponse.rows[0];
    if (!entity) throw new NotFoundException();

    return new UserModel(entity);
  }

  async create(userData: CreateUserDto): Promise<UserModel | undefined> {
    try {
      const dbResponse = await this.databaseService.runQuery(
        `INSERT INTO users (username) VALUES ($1) RETURNING *`,
        [userData.username],
      );
      return new UserModel(dbResponse.rows[0]);
    } catch (error) {
      if (
        isDatabaseError(error) &&
        error.code === PostgresErrorCode.UniqueViolation
      ) {
        throw new UserAlreadyExistsException(userData.username);
      }
      throw error;
    }
  }
}

export default UsersRepository;
