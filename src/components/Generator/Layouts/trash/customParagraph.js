import { Paragraph } from "@tiptap/extension-paragraph";

const CustomParagraph = Paragraph.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      class: {
        default: null,
        parseHTML: (element) => element.getAttribute("class"),
        renderHTML: (attributes) => {
          return attributes.class ? { class: attributes.class } : {};
        },
      },
    };
  },
});

export default CustomParagraph;
