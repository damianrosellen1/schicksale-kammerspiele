import { StructureBuilder } from 'sanity/structure'

export const home = (S: StructureBuilder) =>
  S.listItem()
    .title('Home')
    .schemaType('home')
    .child(S.editor().title('Home').schemaType('home').documentId('home'))
