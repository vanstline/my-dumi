import { useCallback, useState } from 'react';

/**
 * localStorage 状态同步 Hook
 * @param key 存储键名
 * @param defaultValue 默认值
 */
export function useLocalStorage<T>(key: string, defaultValue: T) {
  const initializer = useCallback(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : defaultValue;
    } catch {
      return defaultValue;
    }
  }, [key, defaultValue]);

  const [storedValue, setStoredValue] = useState<T>(initializer);

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const valueToStore = value instanceof Function ? value(prev) : value;
        try {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (e) {
          console.warn(`useLocalStorage set error: ${e}`);
        }
        return valueToStore;
      });
    },
    [key],
  );

  const removeValue = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {
      console.warn(`useLocalStorage remove error: ${e}`);
    }
    setStoredValue(defaultValue);
  }, [key, defaultValue]);

  return [storedValue, setValue, removeValue] as const;
}

export default useLocalStorage;
