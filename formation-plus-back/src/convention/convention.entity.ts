import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Student } from '~student/student.entity'

@Entity({
  name: 'Convention',
})
export class Convention {
  @PrimaryGeneratedColumn()
  idConvention: number

  @Column()
  nom: string

  @Column()
  nbHeur: number

  // We have multiple students related to one Convention
  @OneToMany(
    () => Student,
    // Associate the relation with the convention field
    student => student.convention,
  )
  etudiants: Student[]
}
