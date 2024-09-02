import type { RequestCreate } from "@/utils/request/type";

let baseUrl = "";
let timeout = 5000;
const requestInterceptors: any[] = [];
const responseInterceptors: any[] = [];

export function addRequestInterceptor(i: any) {
  requestInterceptors.push(i);
}

export function addResponseInterceptor(i: any) {
  responseInterceptors.push(i);
}

export function create(t: RequestCreate) {
  if (t?.baseUrl) {
    baseUrl = t.baseUrl;
  }
  if (t?.timeout) {
    timeout = t.timeout;
  }
}

export default async function request<T>(
  url: RequestInfo | URL,
  options?: RequestInit,
): Promise<T> {
  let config = { ...options };
  const fullUrl = `${baseUrl}${url}`;

  // 请求拦截器
  for (const ri of requestInterceptors) {
    config = ri(config);
  }
  const controller = new AbortController();
  const { signal } = controller;
  const timeId = setTimeout(() => controller.abort(), timeout);
  return (await fetch(fullUrl, { ...options, signal })
    .then((r) => {
      let res = r;
      for (const ri of responseInterceptors) {
        res = ri(res);
      }
      return res;
    })
    .then((r) => r.json())
    .then((r) => {
      clearTimeout(timeId);
      return r;
    })
    .catch((e) => {
      if (e.name === "AbortError") {
        throw new Error("请求超时！");
      }
      throw e;
    })) as Promise<T>;
}
