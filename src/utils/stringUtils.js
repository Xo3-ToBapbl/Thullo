export function getAbbreviation(stringValue) {
  return stringValue
    .match(/\b([A-Za-z0-9])/g)
    ?.join("")
    .toUpperCase() ?? stringValue;
}