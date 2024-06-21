// biome-ignore lint/complexity/noBannedTypes: <explanation>
export type ITooltipProps = {};

export default function ITooltip(props: ITooltipProps) {
  return (
    <>
      <div className="relative group">
        <button
          type="button"
          className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg focus:outline-none"
        >
          Hover me
        </button>
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full mb-2 w-32 p-2 text-sm text-center text-white bg-black rounded-lg shadow-lg opacity-0 tooltip-text transition-opacity duration-300">
          This is a tooltip!
        </div>
      </div>
    </>
  );
}
