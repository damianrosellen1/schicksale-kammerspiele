import { PinIcon } from "@sanity/icons";
import React from "react";

export default {
  title: "Place Link",
  name: "linkPlace",
  type: "object",
  components: {
    annotation: ({ children, value }: { children: React.ReactNode; value?: { order?: number } }) => (
      <span>
        <PinIcon
          style={{
            marginLeft: "0.05em",
            marginRight: "0.1em",
            width: "0.75em",
          }}
        />
        <span
          style={{
            opacity: "0.5",
          }}
        >
          ({value?.order})&nbsp;
        </span>
        {children}
      </span>
    ),
  },
  fields: [
    {
      name: "reference",
      type: "reference",
      weak: true,
      validation: (Rule: any) => Rule.required(),
      to: [{ type: "city" }, { type: "place" }],
    },
    {
      name: "order",
      type: "number",
      title: "Order",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "year",
      type: "object",
      title: "Timespan",
      options: {
        columns: 2,
      },
      fields: [
        {
          name: "start",
          type: "number",
          title: "Begin",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "end",
          type: "number",
          title: "End",
        },
      ],
    },
  ],
};
