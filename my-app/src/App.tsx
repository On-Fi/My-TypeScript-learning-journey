import './App.css';
import { Great } from './components/Great';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';

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
      <Heading>Welcome my friend! </Heading>
      <Button handleClick={(event, id) => console.log('Button clicked!', event, id)} />
      <Input value='' handleChange={event => console.log(event)} />
      <Container styles={{ border: '1px solid darkred', padding: '1rem' }} />
      <Status status='error' />
      <Status status='loading' />
      <Status status='success' />
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
