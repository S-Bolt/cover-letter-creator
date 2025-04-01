export default function Skill({ title, name, value, onHandleAddSkill }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="block text-sm text-gray-400">
        {title}
      </label>
      <input
        id={name}
        type="text"
        name={name}
        value={value}
        onChange={onHandleAddSkill}
        className="bg-background py-2 mb-4 rounded-lg w-full pl-4"
      />
    </div>
  );
}
