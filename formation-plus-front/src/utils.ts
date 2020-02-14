export const computeStudentFullName = (student: Student) =>
  `${student.prenom} ${student.nom}`

export const generateAttestationMessage = (student: Student) => {
  return `Bonjour ${student.nom} ${student.prenom},

Vous avez suivi ${student.convention.nbHeur}h de formation chez FormationPlus.
Pouvez-vous nous retourner ce mail avec la pièce jointe signée.

Cordialement,
FormationPlus`
}
