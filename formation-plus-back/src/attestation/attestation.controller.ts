import { Controller } from '@nestjs/common'
import { Crud } from '@nestjsx/crud'
import { Attestation } from './attestation.entity'
import { AttestationService } from './attestation.service'

@Crud({
  model: {
    // Link crud to our Attestation entity
    type: Attestation,
  },
  params: {
    // Set idAttestation as the primary key for the future sql requests
    idAttestation: {
      primary: true,
    },
  },
  query: {
    // Set etudiant and convention tables as joint tables in the sql requests
    join: {
      etudiant: {
        eager: true,
      },
      convention: {
        eager: true,
      },
    },
  },
})
@Controller('attestations')
export class AttestationController {
  // Mandatory
  constructor(public service: AttestationService) {}
}
