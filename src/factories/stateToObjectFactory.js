import { isEmpty } from "../utils/generalUtils";

export function StateToObjectFactory({idle, success, successWhenEmpty, failed, loading}) {
  
  this.idle = idle ?? (() => null);
  this.success = success ?? (() => null);
  this.successWhenEmpty =  successWhenEmpty?? (() => null);
  this.failed = failed ?? (() => null);
  this.loading = loading ?? (() => null);
  
  this.getFor = function getFor(state) {
    return (
      (state.isLoading) ? this.loading() : 
      (state.isSuccess && isEmpty(state.data)) ? this.successWhenEmpty() :
      (state.isSuccess) ? this.success() : 
      (state.isFailed) ? this.failed() : this.idle()
    );
  };
}