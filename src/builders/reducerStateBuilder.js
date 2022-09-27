import { thunkStatuses } from "../resources/constants/thunkStatuses";

export function ReducerStateBuilder(){
  return {
    initial: function () {
      this.status = thunkStatuses.idle;
      this.errorCode = null;
      this.data = null;
      return this;
    },
  
    build: function() {
      return {
        status: this.status ?? thunkStatuses.idle,
        data: this.data,
        errorCode: this.errorCode,
      };
    }
  };
}