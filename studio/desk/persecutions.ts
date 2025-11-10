import { StructureBuilder } from 'sanity/structure'

export const persecutions = (S: StructureBuilder) =>
  S.listItem()
    .title('Persecutions')
    .schemaType('persecution')
    .child(S.documentTypeList('persecution'))
