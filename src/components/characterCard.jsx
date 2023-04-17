function CharacterCard({ pokemon }) {
    return (
      <div>
        <div className="card-body">
          <h3>{pokemon.name}</h3>
        </div>
      </div>
    );
  }
  
  export default CharacterCard;