import { execSync } from "node:child_process";
import fs from "node:fs";
import http from "node:http";

const url = "http://127.0.0.1:8081/v1/swagger/doc.json";
const outputDir = "src/api";

function downloadSwaggerJson(url, callback) {
  http
    .get(url, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        callback(null, data);
      });
    })
    .on("error", (err) => {
      callback(err, null);
    });
}

// Function to generate TypeScript files using openapi-generator-cli
function generateTypeScriptFiles(swaggerJson, outputDir) {
  fs.writeFileSync("swagger.json", swaggerJson); // Write Swagger JSON to file

  // Run openapi-generator-cli command to generate TypeScript files
  execSync(
    `openapi-generator-cli generate -i swagger.json -g typescript-fetch -o ${outputDir}`,
    { stdio: "inherit" },
  );

  fs.unlinkSync("swagger.json"); // Delete temporary Swagger JSON file
}

// Download Swagger JSON and generate TypeScript files
downloadSwaggerJson(url, (err, swaggerJson) => {
  if (err) {
    console.error("Error downloading Swagger JSON:", err);
    return;
  }

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  generateTypeScriptFiles(swaggerJson, outputDir);
});
