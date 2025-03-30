export default function Skill({ title, name, value, onHandleAddSkill }) {
  return (
    <div className="flex flex-col">
      <label className="block mb-2">{title}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onHandleAddSkill}
        className="bg-background py-2 mb-4 rounded-lg w-full pl-2"
      />
    </div>
  );
}
