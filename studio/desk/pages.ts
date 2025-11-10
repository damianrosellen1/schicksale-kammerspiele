import { StructureBuilder } from 'sanity/structure'

export const pages = (S: StructureBuilder) =>
  S.listItem()
    .title('Pages')
    .schemaType('page')
    .child(S.documentTypeList('page'))
