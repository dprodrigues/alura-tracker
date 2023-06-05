import { InjectionKey } from "vue";
import { Store, createStore } from "vuex";
import { IProject } from "@/interfaces/IProject";

interface IState {
  projects: IProject[];
}

export const key: InjectionKey<Store<IState>> = Symbol();

export const store = createStore<IState>({
  state: {
    projects: [
      {
        id: new Date().toISOString(),
        name: "Project Test",
      },
    ],
  },
});
