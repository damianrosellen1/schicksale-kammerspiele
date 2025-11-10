import { LinkIcon } from "@sanity/icons";
import React from "react";
import { PAGE_REFERENCES } from "../../constants";

export default {
  title: "Internal Link",
  name: "linkInternal",
  type: "object",
  components: {
    annotation: ({ children }: { children: React.ReactNode }) => (
      <span>
        <LinkIcon
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
    // Reference
    {
      name: "reference",
      type: "reference",
      weak: true,
      validation: (Rule: any) => Rule.required(),
      to: PAGE_REFERENCES,
    },
  ],
};
