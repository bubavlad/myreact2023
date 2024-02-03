const Simpsons = ({simpsons}) => {
    const {name, age, info, img} = simpsons

    return (
        <div>
            <h1>{name}</h1>
            <h3>{age}</h3>
            <p>{info}</p>
            <img src={img} alt={name}/>
        </div>
    );
};

export {Simpsons};