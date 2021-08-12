import logo from './logo.svg';
import React from 'react';
import './App.css';
import {useState} from 'react'
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import AddMovie from './Components/AddMovie';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Rating from 'react-simple-star-rating';
import image1 from "./image/LALISTEDESCHINDLER.jpg";
import image2 from "./image/LALIGNEVERTE.jpg";
import image3 from "./image/LESEVADÉS.png";
import  image4 from "./image/LEROILION.jpg";
import image5 from "./image/gandhi.jpg";
import image6 from "./image/bonheur.jpg"
import MyComponent from './MyComponent';
import Navigation from './Components/Navigation';

function App() {
  
  const [movies, setMovies] = useState ([
  { id:1,
    title:"LA LISTE DE SCHINDLER",
    description:"Evocation des années de guerre d'Oskar Schindler, fils d'industriel d'origine autrichienne rentré à Cracovie en 1939 avec les troupes allemandes. Il va, tout au long de la guerre, protéger des juifs en les faisant travailler dans sa fabrique et en 1944 sauver huit cents hommes et trois cents femmes du camp d'extermination de Auschwitz-Birkenau",
    posterURL:"https://fr.web.img6.acsta.net/pictures/19/03/14/10/37/5927961.jpg",
    rating:3,
   // image:<img src={image1} alt ='LALISTEDESCHINDLER' />,
   },
   { id:2,
    title:"LA LIGNE VERTE",
    description:"Paul Edgecomb, pensionnaire centenaire d'une maison de retraite, est hanté par ses souvenirs. Gardien-chef du pénitencier de Cold Mountain en 1935, il était chargé de veiller au bon déroulement des exécutions capitales en s’efforçant d'adoucir les derniers moments des condamnés. Parmi eux se trouvait un colosse du nom de John Coffey, accusé du viol et du meurtre de deux fillettes. Intrigué par cet homme candide et timide aux dons magiques, Edgecomb va tisser avec lui des liens très forts    ",
    posterURL:"https://fr.web.img4.acsta.net/medias/nmedia/18/66/15/78/19254683.jpg",
    rating:3,
    //image:<img src={image2} alt='LALIGNEVERTE'/>,
   },
   { id:3,
    title:"LES EVADÉS",
    description:"En 1947, Andy Dufresne, un jeune banquier, est condamné à la prison à vie pour le meurtre de sa femme et de son amant. Ayant beau clamer son innocence, il est emprisonné à Shawshank, le pénitencier le plus sévère de l'Etat du Maine. Il y fait la rencontre de Red, un Noir désabusé, détenu depuis vingt ans. Commence alors une grande histoire d'amitié entre les deux hommes...",
    posterURL:"https://imgsrc.cineserie.com/2016/11/288219.jpg?ver=1",
    rating:4,
    //image:<img src={image3} alt='LESEVADÉS' />,
   },
   { id:4,
    title:"LE ROI LION",
    description:"Sur les Hautes terres d’Afrique règne un lion tout-puissant, le roi Mufasa, que tous les hôtes de la jungle respectent et admirent pour sa sagesse et sa générosité. Son jeune fils Simba sait qu’un jour il lui succèdera, conformément aux lois universelles du cycle de la vie",
    posterURL:"https://lumiere-a.akamaihd.net/v1/images/image_8ce8d7f0.jpeg?region=0,0,540,810",
    rating:5,
  //  image:<img src={image4} alt='LEROILION'/>,
   },
   { id:5,
    title:"Gandhi",
    description:"Incarné par Ben Kingsley, le timide avocat indien s'est élevé contre l'autorité britannique et est devenu un symbole mondial de tolérance et de non-violence",
    posterURL:"https://upload.wikimedia.org/wikipedia/commons/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg",
    rating:4,
   // image:<img src={image5} alt='gandhi'/>,
   },
   { id:6,
    title:"À la recherche du bonheur",
    description:"Abandonné par sa femme et criblé de dettes, Chris se fait expulser de son logement avec son fils. Désespéré, il accepte un stage bénévole dans une société de courtage.",
    posterURL:"https://fr.web.img2.acsta.net/medias/nmedia/18/62/89/48/18708437.jpg",
    rating:4,
   // image:<img src={image6} alt='bonheur'/>,
   },
  ]);

 const[selectRating,setSelectRating] = useState(0);
 const [searchCondition, setSearchCondition]=useState('');
  return (
    <div className='container-fluid movie-app' style={{backgroundColor:"grey"}}>
        <Navigation setSearchCondition={setSearchCondition} 
        setSelectRating={setSelectRating} 
        setSearchCondition={setSearchCondition} 
        setMovies={setMovies}
        movies={movies}/>  
        <MovieList movies={movies}  searchCondition={searchCondition} selectRating={selectRating} />
  
		</div>
  );
}

export default App;
