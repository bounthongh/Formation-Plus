import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Student } from '~student/student.entity'
import { Convention } from '~convention/convention.entity'

@Entity({ name: 'Attestation' })
export class Attestation {
  @PrimaryGeneratedColumn()
  idAttestation: number

  // We want to potentialy have the same student multiple times
  @ManyToOne(
    () => Student,
    // Associate the relation with the idEtudiant field
    stud => stud.idEtudiant,
  )
  etudiant: Student

  // We want to potentialy have the same convention multiple times
  @ManyToOne(
    () => Convention,
    // Associate the relation with the idConvention field
    conv => conv.idConvention,
  )
  convention: Convention

  @Column({ type: 'text' })
  message: string
}
