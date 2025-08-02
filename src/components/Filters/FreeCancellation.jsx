import { useFilter } from "../../context/filter-context";

const FreeCancellation = () => {
  const { filterDispatch, isCancelable } = useFilter();

  const handleCancelChange = (event) => {
    filterDispatch({
      type: "CANCELABLE",
      payload: event.target.checked,
    });
  };

  return (
    <div className="flex items-center gap-x-4 mt-[2rem]">
      <h2 className="font-medium text-2xl text-gray-800">Free Cancellation</h2>

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={handleCancelChange}
          checked={isCancelable}
        />
        <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-colors duration-300 relative">
          <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-5"></div>
        </div>
      </label>
    </div>
  );
};

export default FreeCancellation;
