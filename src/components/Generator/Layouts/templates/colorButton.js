export default function ColorButton({
  onClick,
  outerColor,
  innerColor,
  outerValue,
  innerValue,
}) {
  return (
    <button onClick={onClick} data-outer={outerValue} data-inner={innerValue}>
      <div
        className={`outerColor relative w-16 h-16 border border-black rounded-full flex justify-center items-center ${outerColor}`}
      >
        <div
          className={`innerColor w-8 h-8 border border-black rounded-full ${innerColor}`}
        ></div>
      </div>
    </button>
  );
}
