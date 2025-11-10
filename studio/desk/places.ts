import { StructureBuilder } from 'sanity/structure'

export const places = (S: StructureBuilder) =>
  S.listItem()
    .title('Places')
    .schemaType('place')
    .child(S.documentTypeList('place'))
