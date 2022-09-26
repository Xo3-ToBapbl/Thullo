import { apiMethods } from "../resources/constants/apiMethod";

export const apiRequestBuilder = {
  withMethod: function(method) {
    this.method = method ?? apiMethods.get;
    return this;
  },

  withAuth: function() {
    this.authorize = true;
    return this;
  },

  withModel: function(model) {
    this.model = model;
    return this;
  },

  withParams: function(params) {
    this.params = new URLSearchParams(params);
    return this;
  },

  build: function(path) {
    return {
      path: path,
      params: this.params,
      model: this.model,
      authorize: this.authorize ?? false,
      method: this.method ?? apiMethods.get,
    };
  }
};