import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Attestation } from './attestation.entity'
import { AttestationController } from './attestation.controller';
import { AttestationService } from './attestation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Attestation])],
  controllers: [AttestationController],
  providers: [AttestationService],
})
export class AttestationModule {}
