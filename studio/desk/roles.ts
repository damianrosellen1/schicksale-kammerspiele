import { StructureBuilder } from 'sanity/structure'

export const roles = (S: StructureBuilder) =>
  S.listItem()
    .title('Roles')
    .schemaType('role')
    .child(S.documentTypeList('role'))
