export const requestExecutor = {
  execute() {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject("Error"), 1000);
    });
  },
}