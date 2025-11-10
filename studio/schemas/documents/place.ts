import { PinIcon } from "@sanity/icons";

export default {
  name: "place",
  title: "Place",
  type: "document",
  icon: PinIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "city",
      title: "City",
      type: "reference",
      to: [{ type: "city" }],
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
