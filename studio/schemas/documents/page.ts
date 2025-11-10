import slugify from "slugify";
import { DocumentIcon } from "@sanity/icons";

export default {
  name: "page",
  title: "Page",
  type: "document",
  icon: DocumentIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: (doc) => {
          return slugify(doc.title);
        },
        slugify: (input) => input.toLowerCase().replace(/\s+/g, "-"),
        validation: (Rule) => Rule.required(),
      },
    },
    {
      name: "body",
      title: "Body",
      type: "body.page",
    },
  ],
};
