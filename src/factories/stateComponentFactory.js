import { isEmpty } from "../utils/generalUtils";

export function StateComponentFactory({idle, success, successWhenEmpty, failed, loading}) {
  
  this.idle = idle ?? (() => <></>);
  this.success = success ?? (() => <></>);
  this.successWhenEmpty =  successWhenEmpty?? (() => <></>);
  this.failed = failed ?? (() => <></>);
  this.loading = loading ?? (() => <></>);
  
  this.getFor = function getFor(state) {
    return (
      (state.isLoading) ? this.loading() : 
      (state.isSuccess && isEmpty(state.data)) ? this.successWhenEmpty() :
      (state.isSuccess) ? this.success() : 
      (state.isFailed) ? this.failed() : this.idle()
    );
  };
}