import slugify from "slugify";
import { EarthGlobeIcon, EditIcon, UlistIcon, UsersIcon } from "@sanity/icons";

const DATE_FORMAT = "DD.MM.YYYY";

const formatDate = (str) => {
  const date = new Date(str);
  return new Intl.DateTimeFormat("de-DE").format(date);
};

export default {
  name: "person",
  title: "Person",
  type: "document",
  icon: UsersIcon,
  groups: [
    {
      name: "bio",
      icon: UlistIcon,
      title: "Biography",
    },
    {
      name: "editorial",
      icon: EditIcon,
      title: "Editorial",
    },
  ],
  fields: [
    // Bio
    {
      name: "name",
      title: "Name",
      type: "object",
      group: "bio",
      options: {
        columns: 2,
      },
      fields: [
        {
          name: "firstName",
          title: "First Name",
          type: "string",
        },
        {
          name: "lastName",
          title: "Last Name",
          type: "string",
        },
        {
          name: "birthFirstName",
          title: "Birth First Name",
          type: "string",
        },
        {
          name: "birthLastName",
          title: "Birth Last Name",
          type: "string",
        },
      ],
    },
    {
      group: "bio",
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: (doc) => {
          let source = "";
          if (doc.name?.firstName) {
            source += doc.name.firstName;
          }
          if (doc.name?.firstName && doc.name?.lastName) {
            source += "-";
          }
          if (doc.name?.lastName) {
            source += doc.name.lastName;
          }
          return slugify(source);
        },
        slugify: (input) => input.toLowerCase().replace(/\s+/g, "-"),
        validation: (Rule) => Rule.required(),
      },
    },
    {
      name: "birthplace",
      title: "Birthplace and date",
      type: "object",
      group: "bio",
      fields: [
        {
          name: "date",
          title: "Date",
          type: "date",
          options: {
            dateFormat: DATE_FORMAT,
          },
        },
        {
          name: "place",
          title: "Place",
          type: "reference",
          to: [{ type: "city" }, { type: "place" }],
        },
      ],
    },
    {
      name: "restingplace",
      title: "Resting place and date",
      type: "object",
      group: "bio",
      fields: [
        {
          name: "date",
          title: "Date",
          type: "date",
          options: {
            dateFormat: DATE_FORMAT,
          },
        },
        {
          name: "place",
          title: "Place",
          type: "reference",
          to: [{ type: "city" }, { type: "place" }],
        },
      ],
    },
    {
      name: "role",
      title: "Role at Münchner Kammerspiele",
      group: "bio",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "role" }],
        },
      ],
    },
    {
      name: "persecution",
      title: "Form of persecution",
      type: "reference",
      group: "bio",
      to: [{ type: "persecution" }],
      readOnly: true,
    },
    {
      name: "persecutions",
      title: "Form of persecution(s)",
      type: "array",
      group: "bio",
      of: [{ type: "reference", to: { type: "persecution" } }],
    },
    {
      name: "text",
      title: "Text",
      group: "editorial",
      type: "body.person",
    },
    {
      name: "attachments",
      title: "Attachments",
      group: "editorial",
      type: "array",
      of: [
        {
          type: "object",
          name: "link",
          title: "External link",
          icon: EarthGlobeIcon,
          fields: [
            {
              type: "string",
              name: "title",
              title: "Title",
              validation: (Rule) => Rule.required(),
            },
            {
              type: "url",
              name: "url",
              title: "URL",
              validation: (Rule) => Rule.required(),
            },
            {
              type: "boolean",
              name: "isPodcast",
              title: "Show play button",
              description: "Add play button, e.g. for links to podcasts.",
              initialValue: false,
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      name: "name",
      birthplace: "birthplace",
      restingplace: "restingplace",
    },
    prepare(selection) {
      const { name, birthplace, restingplace } = selection;
      let title = "";
      let subtitle = "";
      title += name?.firstName;
      if (name?.lastName) {
        title += ` ${name.lastName}`;
      }

      if (birthplace?.date) {
        subtitle += formatDate(birthplace.date);
      }
      if (restingplace?.date) {
        subtitle += `–${formatDate(restingplace.date)}`;
      }

      return {
        title: title,
        subtitle: subtitle,
      };
    },
  },
  orderings: [
    {
      title: "Name, A–Z",
      name: "nameAsc",
      by: [{ field: "name.lastName", direction: "asc" }],
    },
    {
      title: "Name, Z—A",
      name: "nameDesc",
      by: [{ field: "name.lastName", direction: "desc" }],
    },
  ],
};
