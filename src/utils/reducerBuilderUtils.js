import { thunkStatuses } from "../resources/constants/thunkStatuses";

export const reducerBuilderUtils = {

  addCases(builder, actionCreators) {
    actionCreators.forEach(actionCreator => {
      builder
        .addCase(actionCreator.pending, (state) => {
          state.status = thunkStatuses.loading;
        })
        .addCase(actionCreator.fulfilled, (state, action) => {
          state.status = thunkStatuses.success;
          state.data = action.payload.data;
        })
        .addCase(actionCreator.rejected, (state, action) => {
          state.status = thunkStatuses.failed;
          state.errorCode = action.error.code;
        });
    });
  },
};