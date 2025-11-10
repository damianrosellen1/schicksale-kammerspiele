import React from "react";

const SmallPrintStyle = (props: { children?: React.ReactNode }) => (
  <p style={{ fontSize: "0.8em" }}>{props.children}</p>
);

export default {
  name: "body.page",
  title: "Text",
  type: "array",
  of: [
    {
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        annotations: [
          // Email
          {
            name: "linkEmail",
            type: "linkEmail",
          },
          // Internal link
          {
            name: "linkInternal",
            type: "linkInternal",
          },
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
      styles: [
        { title: "H2", value: "h2" },
        {
          title: "Smallprint",
          value: "smallprint",
          component: SmallPrintStyle,
        },
        { title: "Quote", value: "blockquote" },
      ],
      // Paragraphs
      type: "block",
      // Blocks
      of: [{ type: "logo" }],
    },
  ],
};
