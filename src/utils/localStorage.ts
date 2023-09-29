export const writeInStorage = (key: string, value: string) => {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {}
};

export const readFromStorage = (key: string): string | null => {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    return null;
  }
};

export const removeFromStorage = (key: string) => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {}
};
