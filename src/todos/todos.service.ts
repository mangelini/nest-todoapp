import { Injectable } from '@nestjs/common';
import TodosRepository from './todos.repository';
import CreateTodoDto from './dto/create-todo.dto';
import TodoModel from './todo.model';

@Injectable()
export class TodosService {
  constructor(private todosRepository: TodosRepository) {}

  async create(createTodoDto: CreateTodoDto): Promise<TodoModel | undefined> {
    return this.todosRepository.create(createTodoDto);
  }

  async findOne(id: number): Promise<TodoModel | undefined> {
    return this.todosRepository.getById(id);
  }

  async findByAuthor(author_id: number): Promise<TodoModel[] | undefined> {
    return this.todosRepository.getByAuthorId(author_id);
  }
}
