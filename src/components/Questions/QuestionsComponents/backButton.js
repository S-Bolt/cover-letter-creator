export default function BackButton({ onHandleBack }) {
  return (
    <button
      type="button"
      onClick={onHandleBack}
      className="px-4 py-2 bg-gray-300 rounded"
    >
      Back
    </button>
  );
}
