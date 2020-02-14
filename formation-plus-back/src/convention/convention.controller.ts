import { Controller } from '@nestjs/common'
import { Crud } from '@nestjsx/crud'
import { Convention } from './convention.entity'
import { ConventionService } from './convention.service'

@Crud({
  model: {
    // Link crud to our Convention entity
    type: Convention,
  },
  params: {
    // Set idConvention as the primary key for the future sql requests
    idConvention: {
      primary: true,
    },
  },
})
@Controller('conventions')
export class ConventionController {
  // Mandatory
  constructor(public service: ConventionService) {}
}
