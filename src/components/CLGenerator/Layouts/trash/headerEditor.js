"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import CustomHeading from "./customHeading";
import CustomParagraph from "./customParagraph";

import { updateHeaderField } from "@/store/slices/headerSlice";
import CustomHR from "./customHR";

export default function HeaderEditor({ onHeaderContent }) {
  const dispatch = useDispatch();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
        paragraph: false,
        horizontalRule: false,
      }),
      CustomHeading,
      CustomParagraph,
      CustomHR,
    ],
    content: onHeaderContent,
    onUpdate: ({ editor }) => {
      const newContent = editor.getHTML();
      dispatch(updateHeaderField(newContent));
    },
  });

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(onHeaderContent);
    }
  }, [onHeaderContent, editor]);

  return (
    <div className="header-editor bg-white p-4">
      {editor ? (
        <EditorContent editor={editor} />
      ) : (
        <p>Loading header editor...</p>
      )}
    </div>
  );
}
