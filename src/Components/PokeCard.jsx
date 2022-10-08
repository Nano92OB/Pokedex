import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokeCard = (props) => {
  const [pokemon, setpokemon] = useState();
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    setpokemon(props.list.find((element) => element.id == id));
    
  }, [props.list]);
 
   

   //const pokeId = props.poke.fixId

   function fixId(pokeId){
      if (pokeId < 10){
          return "00"+pokeId
      }
      else if (pokeId >= 10 && pokeId < 100){
          return "0"+pokeId
      }
      else{
          return pokeId
      }
   } 


  return (
    <React.Fragment>
      {pokemon && (
      <div className={`pokeCardOnly ${(typeof pokemon.type==="string") ? pokemon.type : pokemon.type[0]}`}>      
            <div className="cardTitle">
              <div>
                <img src="/Referencias/Pokeball.png" className="pokebackground"/>
              </div>
              <div className="header">
                <div className="lettersWhite">
                  <img src="/Referencias/arrow-left.svg" className="arrow"/>          
                  <span className="pokeName" >{pokemon.name}</span> 
                </div>       
                <div className="lettersWhite bold"><span>#{fixId(pokemon.id)}</span></div>
              </div> 
              <div className="navigate">
                <img className="rotate" src="/Referencias/Frame.svg" alt="#" />
                <img src="/Referencias/Frame.svg" alt="#" />
              </div>          
            </div>

            <img className="imgPokeCard" src={`Referencias/${pokemon.name}.png`}/>
            
            <div className="pokeDescription">
                <div className="pokeType">
                  {(typeof pokemon.type==="string") ? 
                    <div><span className={`singleType ${pokemon.type} lettersWhite typeTitle`}>{pokemon.type}</span></div> :

                    <div>
                      <span className={`dobleType1 ${pokemon.type[0]} lettersWhite`}>{pokemon.type[0]}</span>
                      <span className={`dobleType2 ${pokemon.type[1]}`}>{pokemon.type[1]}</span>
                    </div>}                
                </div>
              
                <div className="pokeAbout">
                  <span className={`textAbout ${pokemon.type} backgroundWhite`}>About</span>
                  <div className="pokeInfo">
                    <div className="category">
                      <div>
                        <img src="/Referencias/Weight.svg" alt="#"/>
                        <span>{pokemon.weigth} Kg</span>
                      </div>
                      
                      <span>Weight</span>
                    </div>
                    <hr></hr>
                    <div className="category">
                      <div>
                        <img src="/Referencias/Height.svg" alt="#"/>
                        <span>{pokemon.heigth} m</span>  
                      </div>
                      
                      <span>heigth</span>
                    </div>
                    <hr></hr>

                    <div className="category">
                    {(typeof pokemon.moves==="string") ? 
                    <div><span>{pokemon.moves}</span></div> :

                    <div className="prueba">
                      <span className={`${pokemon.moves[0]}`}>{pokemon.moves[0]}</span>
                      <span className={`${pokemon.moves[1]}`}>{pokemon.moves[1]}</span>
                    </div>}  
                    <span>Moves</span>            
                    </div>                          
                  </div>

                </div>

                <div className="pokeSummary">
                  <span>{pokemon.description}</span>
                </div>

                <div className="pokeStats">
                  <div><span className={`${pokemon.type} backgroundWhite`}>Base Stats</span></div>
                  <div>
                    <span className={`${pokemon.type} backgroundWhite`}>HP</span>
                    <span>{pokemon.hp}</span>
                    <div></div>
                  </div>
                  <div>
                    <span className={`${pokemon.type} backgroundWhite`}>ATK</span>
                    <span>{pokemon.atk}</span>
                  </div>
                  <div>
                    <span className={`${pokemon.type} backgroundWhite`}>DEF</span>
                    <span>{pokemon.def}</span>
                  </div>
                  <div>
                    <span className={`${pokemon.type} backgroundWhite`}>SATK</span>
                    <span>{pokemon.satk}</span>
                  </div>
                  <div>
                    <span className={`${pokemon.type} backgroundWhite`}>SDEF</span>
                    <span>{pokemon.sdef}</span>
                  </div>
                  <div>
                    <span className={`${pokemon.type} backgroundWhite`}>SPD</span>
                    <span>{pokemon.spd}</span>
                  </div>
                </div>
            </div>         
      </div>
      )}
    </React.Fragment>
  );
};

export default PokeCard;