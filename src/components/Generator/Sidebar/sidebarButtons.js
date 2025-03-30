export default function SidebarButtons({ icon: Icon, label, onClick }) {
  return (
    <button className="flex items-center pl-[15%]" onClick={onClick}>
      {Icon && <Icon className="h-5 w-5 mr-2" />}
      <div className="flex-grow px-2 py-4 hover:bg-primary-accent rounded-l-lg drop-shadow-lg hover:text-primary">
        <span className="text-sm font-semibold">{label}</span>
      </div>
    </button>
  );
}
