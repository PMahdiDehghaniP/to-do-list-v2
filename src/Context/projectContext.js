import { createContext } from 'react';
export const toDoContext = createContext({
    tasks: [],
    setTasks: () => {},
    fetchTasks: () => {}
});