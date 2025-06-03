import { create } from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";

export const useCountStore = create(
  devtools(
    (set) => ({
      count: 1,
      increase: () =>
        set(
          (state) => ({ count: state.count + 1 }),
          undefined,
          "counter/increment"
        ),
      decrease: () =>
        set(
          (state) => ({ count: state.count - 1 }),
          undefined,
          "counter/decrement"
        ),
      initialize: () => set({ count: 1 }, undefined, "counter/initialize"),
    }),
    {
      name: "countStore",
      // storage: createJSONStorage(() => sessionStorage) ‼️기본값은 localStorage
    }
  )
);
