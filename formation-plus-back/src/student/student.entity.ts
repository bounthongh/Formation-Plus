import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Convention } from '~convention/convention.entity'

@Entity({ name: 'Etudiant' })
export class Student {
  @PrimaryGeneratedColumn()
  idEtudiant: number

  @Column()
  nom: string

  @Column()
  prenom: string

  @Column()
  mail: string

  // We have one convention per student
  @ManyToOne(
    () => Convention,
    // Associate the relation with the etudiants field
    convention => convention.etudiants,
  )
  convention: Convention
}
