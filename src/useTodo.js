import {useState} from 'react';
import uuid from 'uuid/v4';
export default (initial) => {
const [todo,setTodo] = useState(initial);
return ({
    todo,
addItem: (i) => {
    var x = new Date();
    setTodo([...todo,{id: uuid(), item:i,complete:false, date: `${x.getDate()}/${x.getMonth()+1}/${x.getFullYear()}`}])
},
editItem: (id,item) => {
    var newItems = todo.map(e => {
        if(e.id===id) {
            var x = new Date();
            return({...e,item: item,date: `${x.getDate()}/${x.getMonth()+1}/${x.getFullYear()}`,completeDate: ''});
        }
        else 
            return(e);
    });
    setTodo(newItems);
},
completeItem: (id) => {
    var x = new Date();
    var comdate = `${x.getDate()}/${x.getMonth()+1}/${x.getFullYear()}`;
    var newItems = todo.map(e => {
        if(e.id===id) {
            let y=e.complete;
            return({...e,complete: !y,completeDate: comdate});
        }
        else 
            return(e);
    });
    setTodo(newItems);
},
delItem: (idx) => {
    var newItems = todo.filter((i) => i.id!==idx)
    setTodo(newItems);
},
setTodo: setTodo
});
}