import { StructureBuilder } from 'sanity/structure'

export const persons = (S: StructureBuilder) =>
  S.listItem()
    .title('Persons')
    .schemaType('person')
    .child(S.documentTypeList('person'))
