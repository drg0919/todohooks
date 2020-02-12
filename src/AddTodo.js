import React,{useState} from 'react';
import {Button,Alert,InputGroup} from '@blueprintjs/core';
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import user from './user';
export default function AddTodo(props) {
    const [input,setInput,resetInput] = user();
    const [open,setOpen] = useState(false);
    const {adder} = props;
    const addToList = (e) => {
        e.preventDefault();
        if(input) {
            adder(input);
            resetInput('');
        }
        else {
            setOpen(true);
        }
    }
    return(
            <form onSubmit={addToList}>
                <div style={{width: '30vw', margin: '0.5rem auto'}} > <InputGroup
                    large={true}
                    leftIcon="add-to-artifact"
                    onChange={setInput}
                    placeholder="Enter New Item"
                    value={input}
                /></div>
                <div><Button 
                type="submit" 
                role="button" 
                alignText="left" 
                rightIcon="add" 
                large={true} 
                intent="primary">Submit</Button></div>
                <Alert 
                isOpen={open} 
                confirmButtonText="Okay" 
                icon="cross" 
                intent="danger" 
                canOutsideClickCancel={true} 
                onClose={() => setOpen(false)}><p>Empty Item</p></Alert>
            </form>
    );
}