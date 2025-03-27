"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useSelector, useDispatch } from "react-redux";
import { setCoverLetter } from "@/store/slices/generatedCoverLetterSlice";
import { useEffect, useState } from "react";
import CustomParagraph from "./customParagraph";

export default function CoverLetterEditor({ onHandleInput }) {
  const dispatch = useDispatch();
  const coverLetter = useSelector((state) => state.coverLetter.value);
  const [isEditing, setIsEditing] = useState(false);

  const formattedContent = coverLetter
    ? coverLetter.replace(/\n/g, "<br>")
    : "<p>Loading...</p>";

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        paragraph: false,
      }),
      CustomParagraph,
    ],
    content: formattedContent || "<p>Loading...</p>",
    onUpdate: ({ editor }) => {
      // const newContent = editor.getHTML();
      // dispatch(setCoverLetter(newContent));
      if (onHandleInput) onHandleInput(newContent);
    },
    onFocus: () => setIsEditing(true),
    onBlur: () => {
      setIsEditing(false);
      // Update Redux when editor loses focus
      const newContent = editor.getHTML();
      dispatch(setCoverLetter(newContent));
    },
  });

  useEffect(() => {
    if (editor && !isEditing) {
      editor.commands.setContent(formattedContent || "<p>Loading...</p>");
    }
  }, [formattedContent, editor, isEditing]);

  return (
    <div className="generic-editor bg-white p-4 ">
      {editor ? <EditorContent editor={editor} /> : <p>Loading editor...</p>}
    </div>
  );
}
