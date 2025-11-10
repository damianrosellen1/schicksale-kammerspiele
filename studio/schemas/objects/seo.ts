export default {
  name: "seo",
  title: "SEO",
  type: "object",
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "placeholderString",
      description: 'If empty, displays the document title (title)',
      options: { field: "title" },
      validation: (Rule: any) =>
        Rule.max(50).warning(
          "Longer titles may be truncated by search engines"
        ),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      validation: (Rule: any) =>
        Rule.max(150).warning(
          "Longer descriptions may be truncated by search engines"
        ),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};
