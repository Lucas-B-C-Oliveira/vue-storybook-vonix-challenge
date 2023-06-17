import type { FileTableProps } from "@/components/StepContent/StepFileContent/FileTable/FileTable.vue"

const primary: FileTableProps = {
  fileName: 'nomedoaquivoimportado.csv',
  importDate: '08/03/2023',
  table: [
    {
      columnName: 'Nome da coluna',
      celValue: 'Item da coluna'
    },
    {
      columnName: 'Nome da coluna',
      celValue: 'Item da coluna'
    },
    {
      columnName: 'Nome da coluna',
      celValue: 'Item da coluna'
    },
  ]
}

export const Mock = {
  primary,
}