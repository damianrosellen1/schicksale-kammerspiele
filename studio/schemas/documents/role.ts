import { InfoOutlineIcon } from "@sanity/icons";

export default {
  name: "role",
  title: "Role",
  type: "document",
  icon: InfoOutlineIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
  ],
};
