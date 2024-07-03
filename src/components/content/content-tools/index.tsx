/**
 * @desc 我的工具集
 */
import IToolsList from "@/components/content/content-tools/data";
import IToolsCardItem from "@/components/content/content-tools/tools-card-item";
import "./index.css";

export default function ContentTools() {
  return (
    <div className="w-full px-10">
      {IToolsList.map((item) => (
        <div key={item.id} className="mb-4">
          <div className="pb-4 tools-card-line flex items-center">
            {item.tipTitle}
          </div>
          <div className="flex flex-wrap gap-5">
            {item.children.map((subItem, index) => (
              <IToolsCardItem
                key={index}
                title={subItem.title}
                url={subItem.url}
                description={subItem.description}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
