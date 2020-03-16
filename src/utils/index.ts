export const rangeNumber = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export const rangeInterger = (min: number, max: number) =>
  Math.round(rangeNumber(min, max));

export const rangeArray = <T>(arr: T[]) => {
  const index = rangeInterger(0, arr.length);
  const item = arr[index];

  return item;
};

export const objectEqual = <T>(obj1: T, obj2: T) =>
  JSON.stringify(obj1) === JSON.stringify(obj2);
