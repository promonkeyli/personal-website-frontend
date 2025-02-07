// @ts-ignore
/* eslint-disable */
import request from '@/utils/request/index';

/** 工具列表 获取工具 GET /tools */
export async function getTools(options?: { [key: string]: any }) {
  return request<API.Response>('/tools', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 工具新增 添加工具 POST /tools */
export async function postTools(body: API.Tool, options?: { [key: string]: any }) {
  return request<API.Response>('/tools', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
