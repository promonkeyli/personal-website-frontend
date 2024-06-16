"use client";

import { useEffect, useState } from "react";

export default function ToolPage() {
  const [tools, setTools] = useState<
    Array<{ id: number; category: string; name: string; url: string }>
  >([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8001/tool/list")
      .then((r) => r.json())
      .then((r) => {
        setTools(r.data);
      });
  }, []);

  return (
    <>
      {tools.map(({ id, category, name, url }) => (
        <ToolItemCard key={id} category={category} name={name} url={url} />
      ))}
    </>
  );
}

interface ToolItemCardProps {
  category: string;
  name: string;
  url: string;
}

function ToolItemCard(props: ToolItemCardProps) {
  const { category, name, url } = props;
  return (
    <div>
      <a href={url}>{name}</a>
    </div>
  );
}
