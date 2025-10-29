import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MoviesService } from '../service';
import { CreateMovieDto, UpdateMovieDto } from '../dto';
import { Movie } from '../entities';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after!: ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(+movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto): Movie {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  deleteOne(@Param('id') movieId: string): void {
    return this.moviesService.deleteOne(+movieId);
  }

  @Patch('/:id')
  patch(
    @Param('id') movieId: string,
    @Body() updateData: UpdateMovieDto,
  ): Movie {
    return this.moviesService.update(+movieId, updateData);
  }
}
