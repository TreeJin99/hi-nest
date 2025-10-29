import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from '../entities';
import { CreateMovieDto, UpdateMovieDto } from '../dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movieIndex = this.findMovieIndex(id);
    return this.movies[movieIndex];
  }

  deleteOne(id: number): void {
    const movieIndex = this.findMovieIndex(id);
    this.movies.splice(movieIndex, 1);
  }

  create(movieData: CreateMovieDto): Movie {
    const newMovie: Movie = {
      id: Date.now(),
      ...movieData,
    };
    this.movies.push(newMovie);
    return newMovie;
  }

  update(id: number, updateData: UpdateMovieDto): Movie {
    const movieIndex = this.findMovieIndex(id);
    const updatedMovie = { ...this.movies[movieIndex], ...updateData };
    this.movies[movieIndex] = updatedMovie;
    return updatedMovie;
  }

  private findMovieIndex(id: number): number {
    const index = this.movies.findIndex((movie) => movie.id === id);
    if (index === -1) {
      throw new NotFoundException(`Movie with ID ${id} not found.`);
    }
    return index;
  }
}
