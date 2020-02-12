import React,{useState} from 'react';
import {Button,Alert,Checkbox} from '@blueprintjs/core';
import {Card} from '@blueprintjs/core';
import user from './user';
import EditItem from './EditItem';

export default function TodoItem(props) {
    const {item,date,id,updater,complete,completer,completeDate,deleter} = props;
    const [edit,setEdit] = useState(false);
    const [open,setOpen] = useState(false);
    const [editedItem,setItem,resetItem] = user(item);
    const editToList = (e) => {
        e.preventDefault();
        setEdit(false);
        if(editedItem) {
            updater(id,editedItem);
            resetItem(item);
        }
        else {
            setOpen(true);
            setEdit(true);
        }
    }
    const com = () => {
        completer(id);
    }
    const deleteItem = () => {
        deleter(id);
    }
    const canceler = () => {setEdit(false); resetItem(item);}
    let x=null;
    let st  = complete?'line-through':'none';
    let col = complete? 'gray': 'black';
    if(edit) {
       x = (<EditItem editList={editToList} setItem={setItem} editedItem={editedItem} canceler={canceler} />);
    }
    else {
            x=(<Card 
            style={{margin: '1rem',textTransform: 'capitalize',transition: 'all 0.5s'}} 
            elevation={2} 
            interactive={false}
            >
                <Checkbox
                inline={true}
                onChange={com}
                checked={complete}
                style={{display: 'inline'}}
                >
                <h2 style={{textDecoration: st,transition: 'all 0.5s',color: col,textTransform: 'capitalize'}}>{item}</h2>
                </Checkbox>
                <p><strong>Added on : {date}</strong></p>
                <p><strong>Completed on : {complete?completeDate:'Not completed'}</strong></p>
                <Button 
                style={{margin: '0 0.5rem'}}
                role="button" 
                alignText="center" 
                icon="edit" large={true} 
                intent="warning" 
                onClick={() => setEdit(true)}>
                Edit</Button>
                <Button 
                style={{margin: '0 0.5rem'}}
                role="button" 
                alignText="center" 
                icon="trash" large={true} 
                intent="danger"
                onClick={deleteItem} 
                >
                Delete</Button>
            </Card>);}
            return(
                <div style={{margin: '0.5rem auto'}}>
                    {x}
                    <Alert isOpen={open} confirmButtonText="Okay" icon="cross" intent="danger" canOutsideClickCancel={true} onClose={() => setOpen(false)}><p>Empty Item</p></Alert>
                </div>
                );
}