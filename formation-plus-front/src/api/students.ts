import API from './api'

export const getStudents = () => {
  return API.get<Student[]>('/students')
}
