import type { DragAndDropFileProps } from "@/components/StepContent/StepFileContent/DragAndDropFile/DragAndDropFile.vue"


const selectAFile: DragAndDropFileProps = {
  interactionTipIconName: 'dragAndDropFile',
  interactionTipText: 'Arraste ou escolha o arquivo',
  fileTypeHintText: 'O arquivo deve ser .CSV',
  state: 'selectAFile',
  csvIconName: 'csvIconFile',
  fileNameText: 'nome_do_arquivo.csv',
  fileSizeText: '177 B',
  trashButtonText: 'Remover',
  trashIconName: 'trash'
}

const selectedFile: DragAndDropFileProps = {
  interactionTipIconName: 'dragAndDropFile',
  interactionTipText: 'Arraste ou escolha o arquivo',
  fileTypeHintText: 'O arquivo deve ser .CSV',
  state: 'selectedFile',
  csvIconName: 'csvIconFile',
  fileNameText: 'nome_do_arquivo.csv',
  fileSizeText: '177 B',
  trashButtonText: 'Remover',
  trashIconName: 'trash'
}

export const Mock = {
  selectAFile,
  selectedFile
}