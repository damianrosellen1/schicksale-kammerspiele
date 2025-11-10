import { UserIcon } from "@sanity/icons";
import React from "react";

export default {
  title: "Person link",
  name: "linkPerson",
  type: "object",
  components: {
    annotation: ({ children }: { children: React.ReactNode }) => (
      <span>
        <UserIcon
          style={{
            marginLeft: "0.05em",
            marginRight: "0.1em",
            width: "0.75em",
          }}
        />
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
      to: [{ type: "person" }],
    },
  ],
};
