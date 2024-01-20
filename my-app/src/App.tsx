import './App.css';
import { Great } from './components/Great';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

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
      <Great name ='Onur' messageCount= {27} isLoggedIn={false} />
      <Person name= {personName} />
      <PersonList names= {nameList}/>
    </div>
  );
}

export default App;
