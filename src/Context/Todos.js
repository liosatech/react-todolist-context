import {createContext} from 'react';

const todosContext = createContext({
    todos : [],
    add : () => {},
    edite : () => {},
    delete : () => {},
    toggle : () => {}
});

export default todosContext;