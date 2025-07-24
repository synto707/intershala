import { useCallback, useMemo } from 'react';

const useClassNames = (classNames, options) => {
  const resolveClassNameOptions = useCallback(
    (className) => {
      return `${options?.prefix ?? ''}${className}`;
    },
    [options?.prefix]
  );

  const resolveObject = useCallback(
    (className) => {
      const classNames = [];

      Object.keys(className).forEach((key) => {
        if (className[key]) classNames.push(resolveClassNameOptions(key));
      });

      return classNames.join(' ');
    },
    [resolveClassNameOptions]
  );

  const resolveClassName = useCallback(
    (className) => {
      if (typeof className === 'object') {
        return resolveObject(className);
      } else if (className) {
        return resolveClassNameOptions(className);
      }
    },
    [resolveClassNameOptions, resolveObject]
  );

  const resolveClassNames = useCallback(
    (classNames) => {
      const stringifiedClassNames = [];

      classNames?.filter(Boolean)?.map((className) => {
        const resolvedClassName = resolveClassName(className);
        stringifiedClassNames.push(resolvedClassName);
      });

      return stringifiedClassNames;
    },
    [resolveClassName]
  );

  const result = useMemo(() => resolveClassNames(classNames).join(' '), [
    resolveClassNames,
    classNames,
  ]);

  return result;
};

export default useClassNames;
