import styled from 'styled-components';
import {useState} from 'react'


const person = {
  name: 'John Doe',
  age: 32,
  occupation: 'Developer'
};

const address = {
  street: '1234 Main St',
  city: 'San Francisco',
  state: 'CA',
  zip: '94107'
};


const Tabs = () => {
  const [personTab,setPersonTab]=useState(false);
  const [addressTab,setAddressTab]=useState(false);
  const handleTab=()=>{
  setAddressTab(false);
  setPersonTab(true);
}
const handleTab2=()=>{
  setAddressTab(true);
  setPersonTab(false);

}
  return (
    <Container>
      <TabList>
        <Tab onClick={()=>handleTab()} data-testid="person-tab">
          Person
        </Tab>
        <Tab onClick={()=>handleTab2()} data-testid="address-tab">
          Address
        </Tab>
      </TabList>
      <TabContent>
         {personTab ?  <PersonContainer data-testid="person-container">
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <p>Occupation: {person.occupation}</p>
          </PersonContainer> : ""}
          {addressTab ? < AddressContainer className="AddressContainer" data-testid="address-container">
            <p className="TabContent">Street: {address.street}</p>
            <p className="TabContent">City: {address.city}</p>
            <p className="TabContent">State: {address.state}</p>
            <p className="TabContent">Zip: {address.zip}</p>
          </AddressContainer> : ""} 
      </TabContent>
    </Container>
  );
};

export default Tabs;

const Container = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
`;

const TabList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid lightgray;
`;

const Tab = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  color: ${props => (props.active ? 'black' : 'gray')};
  background-color: ${props => (props.active ? 'lightgray' : 'white')};
`;

const TabContent = styled.div`
  padding: 20px;
`;

const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
