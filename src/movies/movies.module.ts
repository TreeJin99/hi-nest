import { Module } from '@nestjs/common';
import { MoviesController } from './controller';
import { MoviesService } from './service';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
