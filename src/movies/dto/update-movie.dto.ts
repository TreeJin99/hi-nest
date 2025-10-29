import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateMovieDto {
  @IsString()
  @IsOptional()
  readonly title?: string;

  @IsNumber()
  @IsOptional()
  readonly year?: number;

  @IsString({ each: true })
  @IsOptional()
  readonly genres?: string[];
}
