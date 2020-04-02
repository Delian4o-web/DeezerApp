export function randomInt(min, max): number {
  let isGreater = false;

  if (min > 20) {
    isGreater = true;
  } else {
    isGreater = false;
  }

  if (isGreater) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  } else {
    return null;
  }

  return null;
}
