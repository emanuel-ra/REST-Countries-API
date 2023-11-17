import { useMode } from "../hooks/useMode";

function Card({ country }) {
    const {dark} = useMode()
    
    const {name, flags, population, region, capital} = country
  return (
    <article className={`card ${dark ? 'card-ligth':'card-dark'}`}>
      <div className={`min-h-[200px] rounded-t-md bg-[length:200%_auto] bg-center bg-no-repeat`} style={{
        backgroundImage: `url(${flags.svg})`
      }}>
        {/* <img src={flags.svg} alt={name} className="h-full rounded-t-md " /> */}
      </div>
      <div className={`p-4 flex flex-col gap-1 h-1/2`}>
        <h2 className="font-bold mb-4">{name}</h2>
        <p><span className="font-bold">Population:</span> {population}</p>
        <p><span className="font-bold">Region:</span> {region}</p>
        <p><span className="font-bold">Capital:</span> {capital}</p>
      </div>
    </article>
  );
}

export default Card;
