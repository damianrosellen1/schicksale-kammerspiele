import {
  CommentIcon,
  FilterIcon,
  HomeIcon,
  InfoOutlineIcon,
  LinkIcon,
} from "@sanity/icons";

const TITLE = "Home";

export default {
  name: "home",
  title: TITLE,
  type: "document",
  icon: HomeIcon,
  groups: [
    {
      name: "intro",
      icon: CommentIcon,
      title: "Popup Texts",
    },
    {
      name: "info",
      icon: InfoOutlineIcon,
      title: "Info Texts",
    },
    {
      name: "filter",
      icon: FilterIcon,
      title: "Filter Texts",
    },
    {
      name: "footer",
      icon: LinkIcon,
      title: "Footer Links",
    },
  ],
  fields: [
    // {
    //   name: "title",
    //   title: "Page Title",
    //   type: "string",
    //   // readOnly: true,
    // },

    //
    // Pop Up
    {
      name: "popup",
      title: "Popup Text",
      type: "object",
      group: "intro",
      fields: [
        {
          name: "body",
          title: "Body",
          type: "body.page",
        },
        {
          name: "button",
          title: "Button",
          type: "string",
        },
        {
          name: "image",
          title: "Mapbox Placeholder Image",
          type: "image",
        },
      ],
    },

    //
    // Info Texts
    {
      title: "Info Texts",
      name: "info",
      type: "object",
      group: "info",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Info Button",
          name: "button",
          type: "string",
        },
        {
          title: "Text",
          type: "body.page",
          name: "body",
        },
      ],
    },

    //
    // Filter Texts
    {
      title: "Filter Texts",
      name: "filter",
      type: "object",
      group: "filter",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Reset",
          name: "reset",
          type: "string",
        },
        // {
        //   title: "Time Headline",
        //   name: "time",
        //   type: "string",
        // },
        {
          title: "Persecutions Headline",
          name: "persecutions",
          type: "string",
        },
        {
          title: "Role Headline",
          name: "roles",
          type: "string",
        },
        {
          title: "Places Headline",
          name: "places",
          type: "string",
        },
      ],
    },
    {
      name: "footer",
      group: "footer",
      title: "Footer Links",
      type: "array",
      of: [
        {
          name: "reference",
          type: "reference",
          weak: true,
          validation: (Rule) => Rule.required(),
          to: [{ type: "page" }],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        // media: icon,
        subtitle: "Index",
        title: TITLE,
      };
    },
  },
};
