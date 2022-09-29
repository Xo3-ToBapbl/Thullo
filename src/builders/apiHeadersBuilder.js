import { isDevelopment } from "../resources/constants/env";

export default function ApiHeaderBuilder(){
  return {
    withAuthorization: function (token) {
      this.authorization = token && `Bearer ${token}`;
      return this;
    },

    withContentType: function(value="application/json;charset=utf-8") {
      this.contentType = value;
      return this;
    },

    withMock: function(code=200) {
      this.mockCode = code;
      return this;
    },

    withCustom: function(headers) {
      this.customHeaders = headers;
      return this;
    },
  
    build: function() {
      return {
        ...(this.authorization && { "Authorization": this.authorization}),
        ...(this.contentType && { "Content-Type": this.contentType}),
        ...((isDevelopment && this.mockCode) && { "x-mock-response-code": this.mockCode}),

        ...this.customHeaders,
      };
    }
  };
} 