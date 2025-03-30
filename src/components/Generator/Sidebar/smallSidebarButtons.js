export default function SmallSidebarButtons({ icon: Icon }) {
  return (
    <li className="flex justify-center items-center">
      <div className="flex items-center justify-center flex-grow py-4 ml-2 hover:bg-primary-accent rounded-l-lg drop-shadow-lg hover:text-primary">
        {Icon && <Icon className="h-5 w-5 xl:h-7 xl:w-7 mr-2" />}
      </div>
    </li>
  );
}
