import { StructureResolver } from 'sanity/structure'
import { home } from './desk/home'
import { cities } from './desk/cities'
import { pages } from './desk/pages'
import { places } from './desk/places'
import { persecutions } from './desk/persecutions'
import { persons } from './desk/persons'
import { roles } from './desk/roles'
import { settings } from './desk/settings'

// If you add document types to desk structure manually, you can add them to this array to prevent duplicates in the root pane
const DOCUMENT_TYPES_IN_STRUCTURE = [
  'home',
  'city',
  'page',
  'persecution',
  'person',
  'place',
  'role',
  'settings',
]

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      persons(S),
      cities(S),
      places(S),
      roles(S),
      persecutions(S),
      S.divider(),
      home(S),
      pages(S),
      S.divider(),
      settings(S),
      S.divider(),
      // Automatically add new document types to the root pane
      ...S.documentTypeListItems().filter(
        (listItem) => !DOCUMENT_TYPES_IN_STRUCTURE.includes(listItem.getId() as string)
      ),
    ])
