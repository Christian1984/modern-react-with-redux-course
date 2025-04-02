import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "http://localhost:3000/openapi.json",
  apiFile: "../src/store/apis/base/baseApi.ts",
  apiImport: "baseApi",
  exportName: "generatedApi",
  outputFile: "../src/store/apis/generated/generatedApi.ts",
  hooks: true,
};

export default config;
