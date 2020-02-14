import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Attestation } from './attestation.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class AttestationService extends TypeOrmCrudService<Attestation> {
  constructor(@InjectRepository(Attestation) repo) {
    super(repo)
  }
}
