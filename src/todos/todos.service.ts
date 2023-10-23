import { Injectable } from '@nestjs/common';
import TodosRepository from './todos.repository';
import CreateTodoDto from './dto/create-todo.dto';
import TodoModel from './todo.model';
import { FilterTodoDto } from './dto/filter-todo.dto';

@Injectable()
export class TodosService {
  constructor(private todosRepository: TodosRepository) {}

  async create(createTodoDto: CreateTodoDto): Promise<TodoModel | undefined> {
    return this.todosRepository.create(createTodoDto);
  }

  async findOne(id: number): Promise<TodoModel | undefined> {
    return this.todosRepository.getById(id);
  }

  async findByAuthor(
    author_id: number,
    filterTodoDto: FilterTodoDto,
  ): Promise<TodoModel[] | undefined> {
    return this.todosRepository.getByAuthorId(author_id, filterTodoDto);
  }

  async deleteTodo(id: number) {
    return this.todosRepository.deleteTodo(id);
  }
}
