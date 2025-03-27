"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import CustomHeading from "./customHeading";
import { updateHeaderField } from "@/store/slices/headerSlice";

export default function HeaderEditor() {
  const dispatch = useDispatch();
  const { jobTitle } = useSelector((state) => state.coverLetterForm);
  const { header } = useSelector((state) => state.header);

  // Build your header HTML string. Adjust class names as needed.
  const headerContent = `
    <div class="header-container">
      <h1 class="header-title">${header.firstName} ${header.lastName}</h1>
      <h2 class="header-subtitle">${jobTitle}</h2>
      <p class="header-contact">${header.email} | ${header.phoneNumber}</p>
    </div>
  `;

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
      }),
      CustomHeading,
    ],
    content: headerContent,
    onUpdate: ({ editor }) => {
      const newContent = editor.getHTML();
      dispatch(updateHeaderField(newContent));
    },
  });

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(headerContent);
    }
  }, [headerContent, editor]);

  return (
    <div className="header-editor bg-amber-300 p-4">
      {editor ? (
        <EditorContent editor={editor} />
      ) : (
        <p>Loading header editor...</p>
      )}
    </div>
  );
}
