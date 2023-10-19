import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignInUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  readonly username: string;
}
