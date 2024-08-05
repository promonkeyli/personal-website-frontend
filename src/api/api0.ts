// @ts-ignore
/* eslint-disable */
import request from '@/utils/http';

/** 用户登录 POST /login */
export async function postLogin(body: API.User, options?: { [key: string]: any }) {
  return request<API.User>('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 我的工具项新增 POST /tool/add */
export async function postToolAdd(body: API.Tool, options?: { [key: string]: any }) {
  return request<API.Tool>('/tool/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 我的工具信息列表获取 GET /tool/list */
export async function getToolList(options?: { [key: string]: any }) {
  return request<API.Tool>('/tool/list', {
    method: 'GET',
    ...(options || {}),
  });
}
