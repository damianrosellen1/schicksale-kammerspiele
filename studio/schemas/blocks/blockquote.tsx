import React from "react";
import { BlockElementIcon } from "@sanity/icons";

export default {
  title: "Quote",
  name: "blockquote",
  type: "object",
  icon: BlockElementIcon,

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
              // {
              //   name: "linkExternal",
              //   type: "linkExternal",
              // },
            ],
            decorators: [],
          },
          // Regular styles
          styles: [
            {
              title: "Normal",
              value: "normal",
              component: ({ children }: { children?: React.ReactNode }) => (
                <div style={{ fontStyle: "italic" }}>{children}</div>
              ),
            },
          ],
          // Paragraphs
          type: "block",
        },
      ],
    },
    {
      name: "source",
      title: "Source",
      type: "array",
      of: [
        {
          lists: [],
          marks: {
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
        title: "Quote",
      };
    },
  },
};
