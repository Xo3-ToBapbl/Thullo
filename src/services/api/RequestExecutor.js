export const requestExecutor = {
  execute() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("User"), 2000);
    });
  },
}