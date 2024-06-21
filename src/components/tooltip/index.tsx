export interface ITooltipProps {
  xxx?: any;
}

export default function ITooltip(props: ITooltipProps) {
  return (
    <div className="p-[100px]">
      <button
        type="button"
        data-tip-content="tooltip content"
        className="w-[140px] h-[60px] px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg focus:outline-none i-tool-tip"
      >
        Hover me
      </button>
    </div>
  );
}
