import { generateService } from "@umijs/openapi";

generateService({
  schemaPath: "http://127.0.0.1:8001/swagger/doc.json",
  serversPath: "src",
});
