import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Student } from './student.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class StudentService extends TypeOrmCrudService<Student> {
  constructor(@InjectRepository(Student) repo) {
    super(repo)
  }
}
