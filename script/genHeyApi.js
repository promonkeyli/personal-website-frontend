import { createClient } from "@hey-api/openapi-ts";

createClient({
  input: "http://127.0.0.1:8081/v1/swagger/doc.json",
  output: "src/api",
  plugins: [
    "@hey-api/client-fetch",
    "@hey-api/schemas",
    {
      dates: true,
      name: "@hey-api/transformers",
    },
    {
      enums: "javascript",
      name: "@hey-api/typescript",
    },
    {
      name: "@hey-api/sdk",
      transformer: true,
    },
  ],
});
