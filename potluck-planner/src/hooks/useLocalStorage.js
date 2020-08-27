import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        if (item) {
            try {
                let test = JSON.parse(item);
                return test;
            } catch {
                return item;
            }
        } else return initialValue;
    });

    const setValue = value => {
        setStoredValue(value);
        value = typeof value !== 'string' ? JSON.stringify(value) : value;
        window.localStorage.setItem(key, value);
    };

    return [storedValue, setValue];
};
