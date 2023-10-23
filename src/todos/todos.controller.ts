import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import FindOneParams from 'src/utils/findOneParams';
import GetTodosByAuthorQuery from './getTodosByAuthorQuery';
import CreateTodoDto from './dto/create-todo.dto';

// TODO Roles, what appens when we authenticate with one user but
// we request the todos for another one?

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get(':id')
  getTodoById(@Param() { id }: FindOneParams) {
    return this.todosService.findOne(id);
  }

  @Get()
  getTodos(@Query() { author_id }: GetTodosByAuthorQuery) {
    return this.todosService.findByAuthor(author_id);
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: number) {
    return this.todosService.deleteTodo(id);
  }
}
