import axios from 'axios';
import { useEffect, useState } from 'react';
import CharacterCard from './characterCard';

function CharacterList() {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextUrl, setNextUrl] = useState(null);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setNextUrl(res.data.next);
        setPokemon(res.data.results);
      })
      .catch((err) => console.error(err));
  }, [url]);

  const handleNextUrl = () => {
    setUrl(nextUrl);
  };

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between">
        <button
          className={`btn btn-primary ${!nextUrl ? 'disabled' : ''}`}
          onClick={handleNextUrl}>
          Fetch Pokemon
        </button>
      </div>
      <div className="card-body">
          <div className="card">
            <div>
              {pokemon &&
                pokemon.map((pokemon) => (
                  <CharacterCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default CharacterList;
