export const apiResultBuilder = {
  withError: function (errorCode, message, statusCode) {
    this.success = false;
    this.error = {
      code: errorCode,
      message: message,
      status: statusCode,
    };
    
    return this;
  },

  build: function(data) {
    return {
      success: this.success ?? true,
      data: data,
      error: this.error,
    };
  }
};