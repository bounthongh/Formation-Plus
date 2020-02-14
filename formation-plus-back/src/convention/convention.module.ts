import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Convention } from './convention.entity'
import { ConventionController } from './convention.controller';
import { ConventionService } from './convention.service';

@Module({
  imports: [TypeOrmModule.forFeature([Convention])],
  controllers: [ConventionController],
  providers: [ConventionService],
})
export class ConventionModule {}
