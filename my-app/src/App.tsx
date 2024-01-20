import './App.css';
import { Great } from './components/Great';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';

function App() {
  const personName = {
    first: 'Onur',
    last: 'Kurt'
  };

  const nameList = [
    { first: 'Temel', last: 'Reis' },
    { first: 'Tarkan', last: '' },
    { first: 'Tyler', last: 'Durden' },
  ];

  return (
    <div className="App">
      <Heading>Placeholder text</Heading>
      <Status status='loading' />
      <Status status='success' />
      <Status status='error' />
      <Oscar> 
        <Heading>And the Oscar goes to Tom Hardy!</Heading>
      </Oscar>
      <Great name ='Onur' messageCount={69} isLoggedIn={true} />
      <Person name= {personName} />
      <PersonList names= {nameList}/>
    </div>
  );
}

export default App;
