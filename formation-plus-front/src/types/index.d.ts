interface Student {
  idEtudiant: number
  nom: string
  prenom: string
  mail: string
  convention: Convention
}

interface Convention {
  idConvention: number
  nom: string
  nbHeur: number
  etudiants: Student[]
}

interface Attestation {
  idAttestation: number
  edutiant: Student
  convention: Convention
  message: string
}
