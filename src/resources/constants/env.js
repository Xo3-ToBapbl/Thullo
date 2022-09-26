export const isDevelopment = process.env.NODE_ENV === "development";

export const debug = function(func) {
  if (isDevelopment) {
    func();
  }
};