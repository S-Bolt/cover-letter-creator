import { Node, mergeAttributes } from "@tiptap/core";

const CustomHR = Node.create({
  name: "customHR",
  group: "block",
  selectable: false,
  parseHTML() {
    return [
      {
        tag: "hr",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["hr", mergeAttributes(HTMLAttributes)];
  },
  addAttributes() {
    return {
      class: {
        default: "custom-hr",
        parseHTML: (element) => element.getAttribute("class"),
        renderHTML: (attributes) => {
          return { class: attributes.class };
        },
      },
    };
  },
});

export default CustomHR;
