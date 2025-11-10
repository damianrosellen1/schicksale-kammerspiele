import { CogIcon, EditIcon, SearchIcon } from "@sanity/icons";

const TITLE = "Settings";

export default {
  name: "settings",
  title: TITLE,
  type: "document",
  icon: CogIcon,
  groups: [
    {
      name: "editorial",
      icon: EditIcon,
      title: "Editorial",
    },
    {
      name: "seo",
      icon: SearchIcon,
      title: "SEO",
    },
  ],
  fields: [
    {
      title: "Page Title",
      name: "title",
      type: "string",
      group: "editorial",
    },

    // Mapbox Cookies
    // {
    //   name: "mapbox",
    //   title: "Intro Text",
    //   type: "object",
    //   group: "intro",
    //   fields: [
    //     {
    //       name: "body",
    //       title: "Body",
    //       type: "body.page",
    //     },
    //     {
    //       name: "button",
    //       title: "Button",
    //       type: "string",
    //     },
    //     {
    //       name: "image",
    //       title: "Mapbox Placeholder Image",
    //       type: "image",
    //     },
    //   ],
    // },
    //
    // Intro Texts
    // {
    //   title: "Intro Texts",
    //   name: "intro",
    //   type: "object",
    //   group: "editorial",
    //   fields: [
    //     {
    //       title: "Text",
    //       type: "body.page",
    //       name: "body",
    //     },
    //     {
    //       title: "OK Button",
    //       name: "button",
    //       type: "string",
    //     },
    //   ],
    // },

    //
    // Info Texts
    // {
    //   title: "Info Texts",
    //   name: "info",
    //   type: "object",
    //   group: "editorial",
    //   fields: [
    //     {
    //       title: "Title",
    //       name: "title",
    //       type: "string",
    //     },
    //     {
    //       title: "Info Button",
    //       name: "button",
    //       type: "string",
    //     },
    //     {
    //       title: "Text",
    //       type: "body.page",
    //       name: "body",
    //     },
    //   ],
    // },

    //
    // Filter Texts
    // {
    //   title: "Filter Texts",
    //   name: "filter",
    //   type: "object",
    //   group: "editorial",
    //   fields: [
    //     {
    //       title: "Title",
    //       name: "title",
    //       type: "string",
    //     },
    //     {
    //       title: "Time Headline",
    //       name: "time",
    //       type: "string",
    //     },
    //     {
    //       title: "Persecutions Headline",
    //       name: "persecutions",
    //       type: "string",
    //     },
    //     {
    //       title: "Role Headline",
    //       name: "roles",
    //       type: "string",
    //     },
    //   ],
    // },

    //
    // Search Texts
    // {
    //   title: "Search Placeholder Text",
    //   name: "searchPlaceholder",
    //   type: "string",
    //   group: "editorial",
    // },

    //
    // Imprint
    // {
    //   name: "imprint",
    //   title: "Imprint Page",
    //   type: "body.page",
    // },

    //
    // Privacy
    // {
    //   name: "privacy",
    //   title: "Privacy Page",
    //   type: "body.page",
    // },

    //
    // Error
    // {
    //   name: "error",
    //   title: "Error Page",
    //   type: "body.page",
    // },

    //
    // SEO
    {
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      };
    },
  },
};
