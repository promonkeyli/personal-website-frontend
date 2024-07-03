import "./index.css";
export interface ToolsCardItemProps {
  title: string;
  description: string;
  url: string;
}
export default function IToolsCardItem(props: ToolsCardItemProps) {
  return (
    <div className="cardBox" onClick={() => window.open(props.url)}>
      <div>{props.title}</div>
      <div className="cardDesc">{props.description}</div>
    </div>
  );
}
