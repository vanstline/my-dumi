import { useCallback, useState } from 'react';

export interface UseToggleOptions {
  /** 自定义 true 值 */
  trueValue?: any;
  /** 自定义 false 值 */
  falseValue?: any;
}

/**
 * 布尔值切换 Hook
 * @returns [当前值, 切换函数, 设为 true, 设为 false]
 */
export function useToggle<T = boolean>(
  defaultValue: T,
  options?: UseToggleOptions,
) {
  const { trueValue, falseValue } = options || {};

  const [state, setState] = useState<T>(defaultValue);

  const toggle = useCallback(
    (value?: T) => {
      if (value !== undefined) {
        setState(value);
        return;
      }
      setState((prev) => {
        if (prev === (trueValue ?? true))
          return (falseValue ?? false) as unknown as T;
        return (trueValue ?? true) as unknown as T;
      });
    },
    [trueValue, falseValue],
  );

  const setTrue = useCallback(
    () => setState((trueValue ?? true) as unknown as T),
    [trueValue],
  );
  const setFalse = useCallback(
    () => setState((falseValue ?? false) as unknown as T),
    [falseValue],
  );

  return [state, toggle, setTrue, setFalse] as const;
}

export default useToggle;
