import { BlockElementIcon } from "@sanity/icons";

export default {
  name: "logo",
  title: "Logo",
  type: "object",
  incon: BlockElementIcon,
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "height",
      title: "Max-Height (in rem)",
      type: "number",
    },
  ],
  preview: {
    select: {
      media: "logo.image",
    },
    prepare(selection) {
      const { media } = selection;
      return {
        title: "Logo",
        media: media,
      };
    },
  },
};
