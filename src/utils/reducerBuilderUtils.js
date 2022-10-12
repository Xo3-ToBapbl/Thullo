import { thunkStatuses } from "../resources/constants/thunkStatuses";

export const reducerBuilderUtils = {

  addCases(builder, actionCreators) {
    actionCreators.forEach(actionCreator => {
      builder
        .addCase(actionCreator.pending, (state) => {
          changeStatus(state, thunkStatuses.loading);
          state.status = thunkStatuses.loading;
        })
        .addCase(actionCreator.fulfilled, (state, action) => {
          changeStatus(state, thunkStatuses.success);
          state.data = action.payload.data;
        })
        .addCase(actionCreator.rejected, (state, action) => {
          changeStatus(state, thunkStatuses.failed);
          state.errorCode = action.error.code;
        });
    });
  },

};

export function changeStatus(state, status) {
  state.status = status;
  state.isSuccess = status === thunkStatuses.success;
  state.isFailed = status === thunkStatuses.failed;
  state.isLoading = status === thunkStatuses.loading;
  state.isIdle = status === thunkStatuses.idle;
}