export default function Loader({ state }) {
  return (
    <div
      className={`fixed inset-0 w-full h-full bg-gray-700 bg-opacity-70 ${
        state ? "" : "hidden"
      }`}
    >
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-16 h-16 border-t-4 border-white border-solid rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
