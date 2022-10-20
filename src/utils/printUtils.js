export function printColored(message, ansiColor) {
  console.log((ansiColor ?? "") + message);
};

export function printInfo(message) {
  console.log(message);
};

export function printError(message) {
  console.error(message);
};