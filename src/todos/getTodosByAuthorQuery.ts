import { Transform } from 'class-transformer';
import { IsNumber, Min } from 'class-validator';

class GetTodosByAuthorQuery {
  @IsNumber()
  @Min(1)
  @Transform(({ value }) => Number(value))
  author_id?: number;
}

export default GetTodosByAuthorQuery;
