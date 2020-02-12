import {useState} from 'react';
export default (initial='') => {
    const [state,setState] = useState(initial);
    const update = (e) => {
            setState(e.target.value);
    };
    const reset = (x) => {
        setState(x);
    };
    return [state,update,reset];
}