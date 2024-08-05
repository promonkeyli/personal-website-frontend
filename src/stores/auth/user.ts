import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserStore {
  username: string;
  token: string;
  setUsername: (n: string) => void;
  setToken: (t: string) => void;
}

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      username: "",
      token: "",
      setUsername: (n) =>
        set({
          username: n,
        }),
      setToken: (t) =>
        set({
          token: t,
        }),
    }),
    {
      name: "user",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useUserStore;
