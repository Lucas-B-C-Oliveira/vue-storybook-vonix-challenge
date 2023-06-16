import type { LeftSidebarProps } from '@/components/Sidebar/LeftSidebar.vue'
import { Mock as StepMock } from '@/components/Sidebar/Step/mock'

const primary: LeftSidebarProps = {
  title: 'Etapas da importação',
  queue: { ...StepMock.defaultStep, text: 'Fila', feedbackText: 'Nome da fila escolhida' },
  file: { ...StepMock.defaultStep, text: 'Arquivo', feedbackText: 'nome_do_arquivo.csv' },
  fileMapping: { ...StepMock.defaultStep, text: 'Mapeamento do arquivo', feedbackText: 'nome_do_arquivo.csv' },
  profilerMapping: { ...StepMock.defaultStep, text: 'Mapeamento do perfilador', feedbackText: 'nome_do_arquivo.csv' },
  analysisOfFileFields: { ...StepMock.defaultStep, text: 'Análise dos campos do arquivo', feedbackText: 'nome_do_arquivo.csv' },
  importation: { ...StepMock.defaultStep, text: 'Importação', feedbackText: 'nome_do_arquivo.csv' },
}


export const Mock = {
  primary
}