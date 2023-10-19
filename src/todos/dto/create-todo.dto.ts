import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export default class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  author_id: number;
}
