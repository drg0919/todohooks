import React from 'react';
import {Button,InputGroup} from '@blueprintjs/core';
import {Card} from '@blueprintjs/core';

export default (props) => {
return(
    <Card
     style={{margin: '1rem',textTransform: 'capitalize',transition: 'all 0.5s'}} 
     elevation={2} 
     interactive={false}
    >
    <form onSubmit={props.editList}>
         <div style={{width: '30vw', margin: '0.5rem auto'}}><InputGroup
             large={true}
             onChange={props.setItem}
             placeholder="Enter Updated Item"
             value={props.editedItem}/></div>
         <Button 
         style={{margin: '0 0.5rem'}}
         type="submit" 
         role="button" 
         alignText="left" 
         rightIcon="saved" 
         large={true} 
         intent="success">Save</Button>
         <Button 
         style={{margin: '0 0.5rem'}}
         onClick={props.canceler}
         role="button" 
         alignText="left" 
         rightIcon="cross" 
         large={true} 
         intent="danger">Cancel</Button>
     </form>
     </Card>
     );}