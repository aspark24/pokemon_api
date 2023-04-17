import { Fragment } from 'react';
import nav from './components/nav';
import CharacterList from './components/characterList';

function App() {
  return (
    <Fragment>
      <nav />
      <div className="container">
        <CharacterList />
      </div>
    </Fragment>
  );
}

export default App;