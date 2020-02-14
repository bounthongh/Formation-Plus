import React, { useState, useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import FormInput from './FormInput'
import * as StudentsAPI from '../api/students'
import * as AttestationsAPI from '../api/attestations'
import {
  useToast,
  Select,
  Stack,
  Button,
  Textarea,
  Box,
  Flex,
  Spinner,
} from '@chakra-ui/core'
import { computeStudentFullName, generateAttestationMessage } from '../utils'

type FormData = {
  studentId: string
  message: string
}

const TOAST_DURATION = 3000

const AttestationForm = () => {
  const { handleSubmit, register, watch, setValue, reset } = useForm<FormData>()
  // Students list
  const [students, setStudents] = useState<Student[]>([])
  // Loading state when retrieving students list
  const [studentsLoading, setStudentsLoading] = useState(false)
  // Loading state for form submission
  const [submitLoading, setSubmitLoading] = useState(false)
  // Toaster function
  const toast = useToast()
  /*
   * Tracks the student id to retrieve it's data
   * and its convention's infos
   */
  const studentId = watch('studentId')
  const student = useMemo(() => {
    return students.find(stud => stud.idEtudiant === parseInt(studentId, 10))
  }, [studentId, students])
  const convention = useMemo(() => {
    if (student) {
      return student.convention
    }
  }, [student])

  // Submit the form
  const onSubmit = async (values: FormData) => {
    try {
      setSubmitLoading(true)
      await AttestationsAPI.submitAttestation(student!, values.message)
      toast({
        status: 'success',
        title: 'Succès',
        description: "L'attestation a été créée avec succès",
        position: 'bottom',
        duration: TOAST_DURATION,
      })
      reset()
    } catch {
      toast({
        status: 'error',
        title: 'Erreur',
        description:
          "Une erreur est survenue au moment d'envoyer l'attestation, veuillez réessayer",
        position: 'bottom',
        duration: TOAST_DURATION,
      })
    } finally {
      setSubmitLoading(false)
    }
  }

  // Retrieve students list
  const getStudents = async () => {
    try {
      setStudentsLoading(true)
      const { data } = await StudentsAPI.getStudents()
      setStudents(data)
    } catch {
      toast({
        status: 'error',
        title: 'Erreur',
        description:
          'Impossible de récupérer la liste des étudiants, veuillez réessayer',
        position: 'bottom',
        duration: TOAST_DURATION,
      })
    } finally {
      setStudentsLoading(false)
    }
  }

  /*
   * Equivalent of componentDidMount in class component
   * We retrieve students list only once after the first render.
   */
  useEffect(() => {
    getStudents()
  }, [])

  /*
   * Whenever the student value changes and that it's not undefined,
   * we set the new message in the text area with the correct student and convention data
   */
  useEffect(() => {
    if (student) {
      setValue('message', generateAttestationMessage(student))
    }
  }, [student, setValue])

  // Render
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4} justify="center" w="100%">
        <Stack isInline spacing={4} justify="space-between">
          <Flex flex={1}>
            <FormInput label="Etudiant" htmlFor="student">
              <Select
                placeholder="Selectionner un étudiant"
                ref={register}
                name="studentId"
                id="student"
              >
                {students.map(student => (
                  <option key={student.idEtudiant} value={student.idEtudiant}>
                    {computeStudentFullName(student)}
                  </option>
                ))}
              </Select>
            </FormInput>
          </Flex>
          <Flex flex={1}>
            <FormInput
              label="Convention"
              htmlFor="convention"
              value={convention?.nom}
              isDisabled
              variant="filled"
              w="100%"
            />
          </Flex>
        </Stack>
        <Box>
          <FormInput label="Message" htmlFor="message">
            <Textarea id="message" name="message" ref={register} h="200px" />
          </FormInput>
        </Box>
        <Box>
          <Button
            variantColor="teal"
            type="submit"
            isDisabled={!studentId}
            isLoading={submitLoading}
          >
            Envoyer
          </Button>
        </Box>
      </Stack>
      {studentsLoading && (
        <Flex
          pos="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
          bg="rgba(0, 0, 0, 0.15)"
          justify="center"
          align="center"
        >
          <Spinner />
        </Flex>
      )}
    </form>
  )
}

export default AttestationForm
