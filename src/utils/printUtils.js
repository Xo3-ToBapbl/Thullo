const logRequests = true;

export function printInfo(message) {
  if (logRequests) {
    console.log(message);
  }
};

export function printError(message) {
  if (logRequests) {
    console.error(message);
  }
};