
import Form from "./Form/Form";
import { Container } from "./Container/Container";
import { ContactsList } from "./Contacts/Contacts";
import FilterInput from "./FilterInput/FilterInput";


const App = () => {
  
      return ( 
      <Container>
        <h2>Phonebook</h2>
        <Form />

        <FilterInput />

        <ContactsList />

        </Container>
    )
}

export default App