import { apiMethods } from "../resources/constants/apiMethod";

export default function ApiRequestBuilder() {
  return {
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

    withHeaders: function(headers) {
      this.headers = headers;
      return this;
    },

    withCancellation: function(signal) {
      this.signal = signal;
      return this;
    },

    withMockCode: function(code) {
      this.mockCode = code;
      return this;
    },
  
    build: function(path) {
      return {
        path: path,
        params: this.params,
        model: this.model,
        headers: this.headers,
        authorize: this.authorize ?? false,
        method: this.method ?? apiMethods.get,
        signal: this.signal,
        mockCode: this.mockCode,
      };
    }
  };
};