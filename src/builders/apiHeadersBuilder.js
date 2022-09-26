import { isDevelopment } from "../resources/constants/env";

export const apiHeaderBuilder = {
  withToken: function (token) {
    this.authorization = token && `Bearer ${token}`;
    return this;
  },

  build: function() {
    let apiHeaders = {
      "Content-Type": "application/json;charset=utf-8",
    };

    if (this.authorization) {
      apiHeaders["Authorization"] = this.authorization;
    }

    if (isDevelopment) {
      apiHeaders["x-mock-response-code"] = 200;
    }

    return apiHeaders;
  }
};