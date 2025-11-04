export function createArray(obj: Record<string, any>) {
  const array = [];

  for (const [key, value] of Object.entries(obj)) {
    array.push({
      [key]: value,
    });
  }

  return array;
}
