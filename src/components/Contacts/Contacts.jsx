import { Item, List, Text, DeleteBtn } from "./Contacts.styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, fetchContacts } from '../../Store/operations';
import { useEffect } from "react";

import PropTypes from 'prop-types';


export const ContactsList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts)
    const filter = useSelector(state => state.filter)
    
    useEffect(() => {
    dispatch(fetchContacts())
      return () => {
        
      }
    }, [])
 
    return (
        
        (<List>
            <h2>Contacts</h2>
            {contacts.items.length > 0 && contacts.items.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase())).map(({ id, name, phone }) => {
                return (
                    <Item key={id} name={name} number={phone}>
                        <Text>{`${name}: ${phone}` }</Text> <DeleteBtn onClick={()=> {dispatch(deleteContact(id))}}>Delete</DeleteBtn>
                    </Item>
                    )
                })}
            </List>)
        
    )
}


ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.objectOf(PropTypes.string)
    )
};
