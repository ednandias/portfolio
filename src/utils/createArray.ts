export function createArray(obj: Record<string, unknown>) {
  const array = [];

  for (const [key, value] of Object.entries(obj)) {
    array.push({
      [key]: value,
    });
  }

  return array;
}
