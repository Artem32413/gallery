import React, { useState } from 'react';
import styles from "./styleBlok.module.scss";

type InputProps = {
  onChange: (newValue: string) => void;
};

export default function Input({onChange}: InputProps) {
  
    const [value, setValue] = useState<string>("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setValue(newValue);
      onChange(newValue);
    }
  return (
    <input type="text"
    className={styles.input}
    placeholder="Painting title"
    onChange={handleChange}
    autoComplete="off"/>
  )
}
