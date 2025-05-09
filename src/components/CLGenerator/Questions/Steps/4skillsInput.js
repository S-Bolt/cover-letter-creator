"use client";
import { useDispatch, useSelector } from "react-redux";
import { updateSkills } from "@/store/slices/coverLetterFormSlice";
import Skill from "../QuestionsComponents/skill";

export default function SkillsInput() {
  const dispatch = useDispatch();
  const { skills } = useSelector((state) => state.coverLetterForm);

  function handleSkillChange(index, value) {
    dispatch(updateSkills({ index, value }));
  }

  return (
    <>
      <fieldset>
        <legend className="block mb-4 font-semibold text-lg text-center">
          List three skills
        </legend>
        <Skill
          title={"Skill 1"}
          name={"skill1"}
          onHandleAddSkill={(e) => handleSkillChange(0, e.target.value)}
          value={skills[0]}
        />
        <Skill
          title={"Skill 2"}
          name={"skill2"}
          onHandleAddSkill={(e) => handleSkillChange(1, e.target.value)}
          value={skills[1]}
        />
        <Skill
          title={"Skill 3"}
          name={"skill3"}
          onHandleAddSkill={(e) => handleSkillChange(2, e.target.value)}
          value={skills[2]}
        />
      </fieldset>
    </>
  );
}
