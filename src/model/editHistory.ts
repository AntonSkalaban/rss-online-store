import { router } from "./router";

const editHistory = (path: string) => {
  history.pushState('', '', path);
  router();
}

export default editHistory;