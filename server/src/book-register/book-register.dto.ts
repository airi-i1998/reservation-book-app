import { IsString } from 'class-validator';

export class BookDto {
  @IsString()
  title: string

  @IsString()
  owner: string
}