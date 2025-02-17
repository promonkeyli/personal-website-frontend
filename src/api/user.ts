// @ts-ignore
/* eslint-disable */
import request from '@/utils/request/index';

/** 用户登录 使用用户名密码进行登录 POST /login */
export async function postLogin(body: API.User, options?: { [key: string]: any }) {
  return request<API.Response>('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // data: body,
    ...(options || {}),
  });
}

/** 用户注销 用户注销，清除会话、注销令牌 POST /logout */
export async function postLogout(options?: { [key: string]: any }) {
  return request<API.Response>('/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 用户列表 获取所有用户 GET /users */
export async function getUsers(options?: { [key: string]: any }) {
  return request<API.Response>('/users', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 新增用户 新增用户 POST /users */
export async function postUsers(body: API.User, options?: { [key: string]: any }) {
  return request<API.Response>('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // data: body,
    ...(options || {}),
  });
}
