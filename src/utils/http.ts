import useUserStore from "@/stores/auth/user";
import axios from "axios";

const TOKEN_BLACK_LIST = ["/login"];

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 1000,
});

axiosInstance.interceptors.request.use(
  (request) => {
    const isAddToken = !TOKEN_BLACK_LIST.includes(request.url as string);
    if (isAddToken) {
      const { token } = useUserStore.getState();
      (request.headers as any)["Authorization"] = `Bearer ${token}`;
    }
    return request;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  // (response) => {
  //   if (response.data.code !== 200) {
  //     console.error(codeMap[response.data.code]);
  //   }
  //   return response.data;
  // },
  (response) => response.data,
  (error) => Promise.reject(error),
);

export default axiosInstance;

const codeMap: { [key: number]: string } = {
  200: "服务器成功返回请求的数据。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "访问被禁止。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
};
