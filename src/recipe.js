import React,{Component} from'react';
import  {Form,FormGroup,FormControl,ControlLabel,Button} from 'react-bootstrap';
//import ControlLabel from "react-bootstrap/es/ControlLabel";

class Apps extends Component
{
    render() {
        return (
   <Form inline>

       <FormGroup>

           <ControlLabel>
               Ingredients
           </ControlLabel> {''}
           <FormControl   type='text' placeholder='garlic'/>
       </FormGroup>
       {''}


       <FormGroup>
           <ControlLabel> dish
           </ControlLabel>
               {''}
           <FormControl type="text" placeholder='lodo'></FormControl>
       </FormGroup>
       {''}

       <Button color={'blue'}> Submit</Button>
   </Form>

        );

    }
}
            export default Apps;