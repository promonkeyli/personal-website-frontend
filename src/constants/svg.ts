// 系统自定义 SVG
export const ISVGMap: { [key: string]: string } = {
  SubSvg: `<svg width="50" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M 0 5 L 50 5" stroke="black" stroke-width="2" fill="#555"/></svg>`,
  AddSvg: `<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><path d="M 20 0 L 20 50" stroke="black" stroke-width="2" fill="#555"/><path d="M 0 25 L 50 25" stroke="black" stroke-width="2" fill="none"/></svg>`,
  MultiSvg: `<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 50 50" stroke="black" stroke-width="2" fill="#555"/><path d="M 0 50 L 50 0" stroke="black" stroke-width="2" fill="none"/></svg>`,
};

// 处理svg，供样式中可以直接使用
export function formatSvgToUrl(name: keyof typeof ISVGMap): string {
  return `data:image/svg+xml;utf8${ISVGMap[name]}`;
}
