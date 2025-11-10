// Document ids which:
// - cannot be created in the 'new document' menu
// - cannot be duplicated, unpublished or deleted
export const LOCKED_DOCUMENT_TYPES = [
  "home",
  "settings",
  // "persecution",
  // "place",
  // "role",
];

// References to include in 'internal' links
export const PAGE_REFERENCES = [
  // { type: "person" },
  { type: "home" },
  { type: "page" },
];
