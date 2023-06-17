import type { FileNotFoundFeedbackProps } from '@/components/StepContent/StepFileContent/FileNotFoundFeedback/FileNotFoundFeedback.vue'


const primary: FileNotFoundFeedbackProps = {
  iconName: 'info',
  title: 'Termo não encontrado',
  subtitle: 'Não encontramos nenhuma arquivo com este nome, verifique e tente novamente.',
}

export const Mock = {
  primary
}