import type { StepFileContentProps } from '@/components/StepContent/StepFileContent/StepFileContent.vue'
import { Mock as DragAndDropMock } from '@/components/StepContent/StepFileContent/DragAndDropFile/mock'
import { Mock as FileContentHeaderMock } from '@/components/StepContent/StepFileContent/FileContentHeader/mock'
import { Mock as FileTablesMock } from '@/components/StepContent/StepFileContent/FileTable/mock'
import { Mock as NextStepButtonMock } from '@/components/StepContent/StepFileContent/NextStepButton/mock'
import { Mock as FileNotFoundFeedbackMock } from '@/components/StepContent/StepFileContent/FileNotFoundFeedback/mock'

const selectAFile: StepFileContentProps = {
  state: 'selectAFile',
  fileNotFoundFeedbackProps: FileNotFoundFeedbackMock.primary,
  nextStepButtonProps: NextStepButtonMock.primary,
  dragAndDropProps: DragAndDropMock.selectAFile,
  fileContentHeaderProps: FileContentHeaderMock.primary,
  fileTablesProps: [
    { ...FileTablesMock.primary, idKey: '1' },
    { ...FileTablesMock.primary, idKey: '2' },
    { ...FileTablesMock.primary, idKey: '3' },
  ],
}

const nextStep: StepFileContentProps = {
  state: 'nextStep',
  fileNotFoundFeedbackProps: FileNotFoundFeedbackMock.primary,
  nextStepButtonProps: NextStepButtonMock.primary,
  dragAndDropProps: {
    ...DragAndDropMock.selectAFile,
    state: 'selectedFile',
  },
  fileContentHeaderProps: FileContentHeaderMock.primary,
  fileTablesProps: [
    { ...FileTablesMock.primary, idKey: '1' },
    { ...FileTablesMock.primary, idKey: '2' },
    { ...FileTablesMock.primary, idKey: '3' },
  ],
}

const fileNotFound: StepFileContentProps = {
  state: 'fileNotfound',
  fileNotFoundFeedbackProps: FileNotFoundFeedbackMock.primary,
  nextStepButtonProps: NextStepButtonMock.primary,
  dragAndDropProps: {
    ...DragAndDropMock.selectAFile,
    state: 'selectedFile',
  },
  fileContentHeaderProps: FileContentHeaderMock.primary,
  fileTablesProps: [
    { ...FileTablesMock.primary, idKey: '1' },
    { ...FileTablesMock.primary, idKey: '2' },
    { ...FileTablesMock.primary, idKey: '3' },
  ],
}

export const Mock = {
  selectAFile,
  nextStep,
  fileNotFound
}