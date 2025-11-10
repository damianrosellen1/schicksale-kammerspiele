export default {
  name: "body.person",
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
          // Person
          {
            name: "linkPerson",
            type: "linkPerson",
          },
          // Place
          {
            name: "linkPlace",
            type: "linkPlace",
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
        // { title: "Quote", value: "blockquote" },
      ],
      // Paragraphs
      type: "block",
      // Blocks
      of: [{ type: "footnote" }],
    },
    {
      type: "blockquote",
    },
  ],
};
