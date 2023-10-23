import { Transform } from 'class-transformer';
import { IsBoolean, IsDateString, IsOptional } from 'class-validator';

export class FilterTodoDto {
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  completed: boolean;

  @IsOptional()
  @IsDateString()
  @Transform(({ value }) => new Date(value))
  date: Date;
}
