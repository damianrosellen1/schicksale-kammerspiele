import { PinRemovedIcon } from "@sanity/icons";

export default {
  name: "city",
  title: "City",
  type: "document",
  icon: PinRemovedIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      type: "geopoint",
      title: "Location",
      validation: (Rule) => Rule.required(),
    },
  ],
};
