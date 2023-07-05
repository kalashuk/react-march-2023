import {Simpson} from "./components/simpsons/simpson";
import {RickMorty} from "./components/rick&morty/rick&morty";

function App() {
    let rickAndMortyArr = [
        {
            id: 63,
            name: "Centaur",
            status: "Alive",
            species: "Mythological Creature",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/63.jpeg",
        },
        {
            id: 129,
            name: "Fulgora",
            status: "Alive",
            species: "Human",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/129.jpeg",
        },
        {
            id: 139,
            name: "General Store Owner",
            status: "Dead",
            species: "Alien",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/139.jpeg",
        },
        {
            id: 622,
            name: "Sarge",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/622.jpeg",
        },
        {
            id: 646,
            name: "Steve",
            status: "Dead",
            species: "Alien",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/646.jpeg",
        },
        {
            id: 676,
            name: "Japheth's Middle Son",
            status: "Dead",
            species: "Humanoid",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/676.jpeg",
        }
    ]
  return (
    <div className="App">
        <div id="simpsons">
            <Simpson name={'Homer'} url={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
            <Simpson name={'Bart'} url={'https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif'}/>
            <Simpson name={'Marge'} url={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
            <Simpson name={'Lisa'} url={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}/>
            <Simpson name={'Burns'} url={'https://static.tvtropes.org/pmwiki/pub/images/mr_burns_groening.png'}/>
        </div>
        <div id="rick&morty">
        <RickMorty id={rickAndMortyArr[0].id} name={rickAndMortyArr[0].name} status={rickAndMortyArr[0].status} species={rickAndMortyArr[0].species} gender={rickAndMortyArr[0].gender} image={rickAndMortyArr[0].image}/>
        <RickMorty id={rickAndMortyArr[1].id} name={rickAndMortyArr[1].name} status={rickAndMortyArr[1].status} species={rickAndMortyArr[1].species} gender={rickAndMortyArr[1].gender} image={rickAndMortyArr[1].image}/>
        <RickMorty id={rickAndMortyArr[2].id} name={rickAndMortyArr[2].name} status={rickAndMortyArr[2].status} species={rickAndMortyArr[2].species} gender={rickAndMortyArr[2].gender} image={rickAndMortyArr[2].image}/>
        <RickMorty id={rickAndMortyArr[3].id} name={rickAndMortyArr[3].name} status={rickAndMortyArr[3].status} species={rickAndMortyArr[3].species} gender={rickAndMortyArr[3].gender} image={rickAndMortyArr[3].image}/>
        <RickMorty id={rickAndMortyArr[3].id} name={rickAndMortyArr[3].name} status={rickAndMortyArr[3].status} species={rickAndMortyArr[3].species} gender={rickAndMortyArr[3].gender} image={rickAndMortyArr[3].image}/>
        <RickMorty id={rickAndMortyArr[4].id} name={rickAndMortyArr[4].name} status={rickAndMortyArr[4].status} species={rickAndMortyArr[4].species} gender={rickAndMortyArr[4].gender} image={rickAndMortyArr[4].image}/>
        </div>
    </div>


  );
}

export default App;
