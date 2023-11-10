export function getOnlyNumber(data) {
  const regex = /\d+/;
  const match = String(data).match(regex);

  if (match) {
    return match[0];
  }

  return 0;
}