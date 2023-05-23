import NavBar from './components/NavBar';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import ONama from './components/ONama';
import Footer from './components/Footer';
import Filmovi from './components/Filmovi';
import { useState } from 'react';
import ListaGledanja from './components/ListaGledanja';
import CopyButton from "./components/CopyButton";

function App() {
  const [listaFilmova,setListaF]=useState([]);

  const email = "filmovi1@gmail.com";

  const[sviFilmovi] = useState([

    {
        id:1,
        slika: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9QMfG9P5Lx7NxPsAfdNrU2AJ4s5cIA-tF6Z-zmpCKJMOw1klq",
        naziv:"Iron man 3",
        godina:"2013",
        producent:"Kevin Feige",
        glavneUloge: "Rober Downey Jr, Gwyneth Paltro, Don Cheadle",
        zanr: "Sci-fi, action",
        lista: 0
    },
    {
      id:2,
      slika: "https://upload.wikimedia.org/wikipedia/sr/3/38/Avengers_2.jpg",
      naziv:"Avangers: Age of Ultron",
      godina:"2015",
      producent:"Kevin Feige",
      glavneUloge: "Chris Hemsworth, Rober Downey Jr, Mark Ruffalo, Chris Evans",
      zanr: "Sci-fi",
      lista: 0
    },
    {
      id:3,
      slika: "https://movies.universalpictures.com/media/fstx-montage1sheet2-rgb-1-64108e93e63dd-1.jpg",
      naziv:"Fast X",
      godina:"2023",
      producent:"Lui Leterye",
      glavneUloge: "Vin Dizel, Jason Statham, Michel Rodrigez, Tairis Gibson",
      zanr: "Action",
      lista: 0
    },
    {
      id:4,
      slika: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBost-62GmlQ5H0GYNYPfZWzgWn0XwS090ps_A0oJUjTBYKvad",
      naziv:"Slice",
      godina:"2018",
      producent:"Austin Vesely",
      glavneUloge: "Zazie Beetz, Rea Grey, Ilan Noel",
      zanr: "Comedy",
      lista: 0
    },
    {
      id:5,
      slika: "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT2N2ZrmYBU4AVdPThP-TJRIkcR6E_SeZxTA7kKta9Pqn3FLP6mXn9vllIgbxuOCWAW",
      naziv:"Amazing Spider-Man 2",
      godina:"2014",
      producent:"Mark Veb",
      glavneUloge: "Andrew Garfield, Emma Stone, Jamie Foxx, Dane DeHaan",
      zanr: "Action",
      lista: 0
    },
    {
      id:6,
      slika: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT69ptPLOimTOf_ZcTl4tqVga-nykD0xWD8BNeVTgmLxTYO5ifR",
      naziv:"Big George Foreman",
      godina:"2023",
      producent:" George Tilman",
      glavneUloge: "Chris Davis, Jasmin Mathews, John Magaro",
      zanr: "Sports drama",
      lista: 0
    },
    {
      id:7,
      slika: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRINGsPFfmiZzSG1yp8dDvnBMzJY1koebxA0azrPc7RL-WWAHa3",
      naziv:"Crater",
      godina:"2023",
      producent:"Kyal Patrick Alvarez",
      glavneUloge: "Isaiah Russell-Bailey, Mckenna Grace, Billy Barratt",
      zanr: "Sci-fi",
      lista: 0
    },
    {
      id:8,
      slika: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS6w45-I7S1ilN6ztBUA3Kvp2Mukltz1zsuO0YdmoNkBb56ey4z",
      naziv:"Maneater",
      godina:"2022",
      producent:"Justin Lee",
      glavneUloge: "Nicky Whelan, Shane West, Trace Adkin",
      zanr: "Horror thriller",
      lista: 0
    },



  ]);

  const [krterijumPretrage,setKriterijumPretrage]=useState("");

  function pretrazi(kriterijum){
    setKriterijumPretrage(kriterijum);
  }

  function dodaj(id){
    for(var i=0;i<sviFilmovi.length;i++){
      if(sviFilmovi[i].id==id){
        sviFilmovi[i].lista=1;
      }
    }
    var niz = sviFilmovi.filter((film)=>film.lista==1);
    setListaF(niz);
  }

  function izbaci(id){
    for(var i=0;i<sviFilmovi.length;i++){
      if(sviFilmovi[i].id==id){
        sviFilmovi[i].lista=0;
      }
    }
    var niz = sviFilmovi.filter((film)=>film.lista==1);
    setListaF(niz);
  }

  return (

    <div>
    <BrowserRouter>
        <NavBar pretrazi={pretrazi}></NavBar>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/onama" element={<ONama></ONama>}></Route>
            <Route path="/filmovi" element={<Filmovi kriterijum={krterijumPretrage} filmovi={sviFilmovi} dodaj={dodaj}></Filmovi>}></Route>
            <Route path="/listaGledanja" element={<ListaGledanja kriterijum={krterijumPretrage}  filmovi={listaFilmova} izbaci={izbaci}></ListaGledanja>}></Route>
          </Routes>
     </BrowserRouter>
     <div className="kontejner"> <CopyButton textToCopy={email}/> </div>
     <Footer></Footer>
  </div>
  );
}

export default App;
