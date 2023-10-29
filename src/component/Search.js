
export default function Search({
  placeholder,
  value,
  setValue,
  searchClick,
  focus,
}) {
  const handleOnchange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="w-full flex items-center justify-center gap-4 mb-5">
      <div className="relative">
        <input
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={handleOnchange}
          autoFocus={focus}
          className="p-2 pl-12 pr-3 border border-gray-300 rounded-md"
        />
        <button
          type="button"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent text-black font-medium border border-gray-300 border-t-0 border-b-0 text-sm px-2 hover:bg-blue-100 focus:bg-blue-100"
          onClick={() => setValue("")}
          style={{ display: value ? "" : "none" }}
        >
          x
        </button>
      </div>
      <button type="button" onClick={(e) => searchClick(e)}>
        Search
      </button>
    </div>
  );
}
