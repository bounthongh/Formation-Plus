import { Controller } from '@nestjs/common'
import { Crud } from '@nestjsx/crud'
import { Student } from './student.entity'
import { StudentService } from './student.service'

@Crud({
  model: {
    // Link crud to our Convention entity
    type: Student,
  },
  params: {
    // Set idEtudiant as the primary key for the future sql requests
    idEtudiant: {
      primary: true,
    },
  },
  query: {
    // Set convention table as joint table in the sql requests
    join: {
      convention: {
        eager: true,
      },
    },
  },
})
@Controller('students')
export class StudentController {
  constructor(public service: StudentService) {}
}
