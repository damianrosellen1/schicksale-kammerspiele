import { SchemaTypeDefinition } from 'sanity'

// Annotations
import linkEmail from './annotations/linkEmail'
import linkExternal from './annotations/linkExternal'
import linkInternal from './annotations/linkInternal'
import linkPerson from './annotations/linkPerson'
import linkPlace from './annotations/linkPlace'

// Blocks
import blockquote from './blocks/blockquote'
import footnote from './blocks/footnote'
import logo from './blocks/logo'

// Objects
import bodyPage from './objects/bodyPage'
import bodyPerson from './objects/bodyPerson'
import placeholderString from './objects/placeholderString'
import seo from './objects/seo'

// Singletons
import home from './singletons/home'
import settings from './singletons/settings'

// Documents
import city from './documents/city'
import page from './documents/page'
import persecution from './documents/persecution'
import person from './documents/person'
import place from './documents/place'
import role from './documents/role'

export const schemaTypes: SchemaTypeDefinition[] = [
  // Annotations
  linkEmail,
  linkExternal,
  linkInternal,
  linkPerson,
  linkPlace,

  // Blocks
  blockquote,
  footnote,
  logo,

  // Objects
  bodyPage,
  bodyPerson,
  placeholderString,
  seo,

  // Singletons
  home,
  settings,

  // Documents
  city,
  page,
  persecution,
  person,
  place,
  role,
]

export const schema = {
  types: schemaTypes,
}
