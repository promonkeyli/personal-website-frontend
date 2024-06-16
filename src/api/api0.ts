// @ts-ignore
/* eslint-disable */
// @ts-ignore
import { request } from "umi";

/** 我的工具项新增 POST /tool/add */
export async function postAdd(
  body: API.Tool,
  options?: { [key: string]: any },
) {
  return request<API.Tool>("/tool/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 我的工具信息列表获取 GET /tool/list */
export async function getList(options?: { [key: string]: any }) {
  return request<API.Tool>("/tool/list", {
    method: "GET",
    ...(options || {}),
  });
}
