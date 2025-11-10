import { RevertIcon } from "@sanity/icons";

export default {
  title: "Footnote",
  name: "footnote",
  type: "object",
  icon: RevertIcon,

  fields: [
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [
        {
          lists: [],
          marks: {
            annotations: [
              // URL
              {
                name: "linkExternal",
                type: "linkExternal",
              },
            ],
            decorators: [
              {
                title: "Italic",
                value: "em",
              },
            ],
          },
          // Regular styles
          styles: [{ title: "Normal", value: "normal" }],
          // Paragraphs
          type: "block",
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Footnote",
      };
    },
  },
};
