import { StructureBuilder } from 'sanity/structure'

export const cities = (S: StructureBuilder) =>
  S.listItem()
    .title('Cities')
    .schemaType('city')
    .child(S.documentTypeList('city'))
