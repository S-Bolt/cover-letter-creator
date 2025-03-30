export default function NextButton({ onHandleNext }) {
  return (
    <button
      type="button"
      onClick={onHandleNext}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Next
    </button>
  );
}
