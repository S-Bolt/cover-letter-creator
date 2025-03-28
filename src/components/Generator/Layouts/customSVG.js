import { Node, mergeAttributes } from "@tiptap/core";

export const CustomSVG = Node.create({
  name: "customSVG",
  inline: true,
  group: "inline",
  atom: true,
  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },
  parseHTML() {
    return [
      {
        tag: "svg",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return [
      "svg",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },
});
