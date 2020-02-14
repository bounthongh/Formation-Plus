import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Convention } from './convention.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class ConventionService extends TypeOrmCrudService<Convention> {
  constructor(@InjectRepository(Convention) repo) {
    super(repo)
  }
}
