import React,{useEffect,useState} from 'react';
import {Button,Alert} from '@blueprintjs/core';
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import useTodo from './useTodo';


export default function Todo() {
    const initialList = JSON.parse(window.localStorage.getItem("todos")||"[]");
    const [emplist,setEmplist] = useState(false);
    const {todo,addItem,editItem,completeItem,delItem,setTodo} = useTodo(initialList);
    useEffect(() => {
            window.localStorage.setItem("todos",JSON.stringify(todo));
        }, [todo]);
    const clearStorage = () => {
        if(window.localStorage.getItem("todos")!=="[]"){
        window.localStorage.clear();
        setTodo([]);}
        else
            setEmplist(true);
    }

    return(
        <div style={{padding: '3rem'}}>
     
        {/* <Callout intent="danger" icon={null}> */}
            {todo.map(e => <TodoItem {...e} 
            updater={editItem} 
            completer={completeItem} 
            deleter={delItem} 
            key={e.id}/>)}
            <AddTodo adder={addItem}/>
            {/* </Callout> */}
            <Button 
            style={{display: 'inline',margin: '0.5rem auto'}} 
            rightIcon="ban-circle" onClick={clearStorage} 
            intent="danger"
            large={true}
            >Delete the full list</Button>
            <Alert 
                isOpen={emplist} 
                confirmButtonText="Okay" 
                icon="stop" 
                intent="danger" 
                canOutsideClickCancel={true} 
                onClose={() => setEmplist(false)}><p>Empty List</p></Alert>
        </div>
     
    );
}