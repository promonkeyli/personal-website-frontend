import { generateService } from "@umijs/openapi";

const BASE_URL = "http://api.promonkeyli.top:8080";

generateService({
  requestLibPath: 'import request from "@/utils/http"',
  schemaPath: `${BASE_URL}/swagger/doc.json`,
  serversPath: "src",
});
