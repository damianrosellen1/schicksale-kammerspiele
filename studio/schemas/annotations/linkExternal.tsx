import { EarthGlobeIcon } from "@sanity/icons";
import React from "react";

export default {
  title: "External Link",
  name: "linkExternal",
  type: "object",
  components: {
    annotation: ({ children }: { children: React.ReactNode }) => (
      <span>
        <EarthGlobeIcon
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
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule: any) => Rule.required().uri({ scheme: ["http", "https"] }),
    },
    // Open in a new window
    {
      title: "Open in a new window?",
      name: "newWindow",
      type: "boolean",
      initialValue: true,
    },
  ],
};
