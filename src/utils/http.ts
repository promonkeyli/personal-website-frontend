import { client } from "@/api/client.gen";
import useUserStore from "@/stores/auth/user";

function httpClientInit() {
  const TOKEN_BLACK_LIST = ["/login"];

  client.setConfig({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  });

  client.interceptors.request.use((req) => {
    const isAddToken = !TOKEN_BLACK_LIST.includes(req.url as string);
    if (isAddToken) {
      const { token } = useUserStore.getState();
      req.headers.set("Authorization", `Bearer ${token}`);
    }
    console.log("req", req);
    return req;
  });

  client.interceptors.response.use((response) => {
    if (response.status === 200) {
      console.log(`request to ${response.url} was successful`);
    }
    return response;
  });
}

export default httpClientInit;
