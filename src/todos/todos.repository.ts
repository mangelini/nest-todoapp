import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import TodoModel, { TodoModelData } from './todo.model';
import CreateTodoDto from './dto/create-todo.dto';

@Injectable()
export default class TodosRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  async getById(id: number): Promise<TodoModel | undefined> {
    const dbResponse = await this.databaseService.runQuery(
      `SELECT * FROM todos WHERE todos.id=$1`,
      [id],
    );

    const entity = dbResponse.rows[0];
    if (!entity) throw new NotFoundException();

    return new TodoModel(entity);
  }

  async getByAuthorId(author_id: number): Promise<TodoModel[] | undefined> {
    const dbResponse = await this.databaseService.runQuery(
      `SELECT * FROM todos WHERE todos.author_id=$1`,
      [author_id],
    );

    const entities = dbResponse.rows;

    if (!entities || entities.length === 0) {
      throw new NotFoundException();
    }

    // Map the database rows to TodoModel objects
    const todoModels: TodoModel[] = entities.map((entity: TodoModelData) => {
      return new TodoModel(entity);
    });

    return todoModels;
  }

  async create(todoData: CreateTodoDto): Promise<TodoModel | undefined> {
    const dbResponse = await this.databaseService.runQuery(
      `INSERT INTO todos (title, author_id) VALUES ($1, $2) RETURNING *`,
      [todoData.title, todoData.author_id],
    );
    return new TodoModel(dbResponse.rows[0]);
  }
}
