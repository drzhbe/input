import React, { useEffect, useState } from "react";

export const MyInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  // Setup local value from the server value ↓.
  const [localValue, setLocalValue] = useState(value);

  // Update from bulk edit ↓.
  useEffect(() => {
    if (localValue !== value) {
      setLocalValue(value);
    }
  }, [value]);

  // Debounce and update server value ↑.
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(localValue);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [localValue]);

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
  };

  return <input type="text" value={localValue} onChange={change} />;
};
