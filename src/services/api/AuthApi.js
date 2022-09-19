import { requestExecutor } from "./RequestExecutor"

export const authApi = {
  signup() {
    return requestExecutor.execute();
  },
}