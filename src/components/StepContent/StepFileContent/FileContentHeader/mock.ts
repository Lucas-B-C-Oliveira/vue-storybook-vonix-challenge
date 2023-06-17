import { type FileContentHeaderProps } from '@/components/StepContent/StepFileContent/FileContentHeader/FileContentHeader.vue'
import { Mock as FileContentHeaderMock } from '@/components/StepContent/StepFileContent/SearchFile/mock'


const primary: FileContentHeaderProps = {
  searchFileProps: FileContentHeaderMock.primary,
  title: 'Outras importações nesta fila',
}

export const Mock = {
  primary,
}