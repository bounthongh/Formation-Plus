import API from './api'

export const submitAttestation = (student: Student, message: string) => {
  return API.post('/attestations', {
    etudiant: student.idEtudiant,
    convention: student.convention.idConvention,
    message,
  })
}
