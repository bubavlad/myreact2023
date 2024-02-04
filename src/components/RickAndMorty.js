const RickAndMorty = ({rickandmorty}) => {
    const {name,status,species,gender,image} = rickandmorty;

    return (
        <div>
            <h1>Name: {name}</h1>
            <h3>Status: {status}</h3>
            <h3>Species: {species}</h3>
            <h3>Gender: {gender}</h3>
            <img src={image} alt={name}/>
        </div>
    );
};

export {RickAndMorty};