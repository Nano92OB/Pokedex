import React from "react";

const ProgressBar = (poke, stat)=>{
    
    function getPercentage(pokemonStat){
        let aux = pokemonStat
        let percentage = (aux * 100) / 255 
        
        return percentage
    }
    
    const noProgress = {
        height: '15%',
        width: '40vh',
        backgroundColor: 'whitesmoke',
        borderRadius: '10%',
        margin: '10',
      }
      
      const progress = {
        height: '100%',
        width: '${(stat*100)/255}%',
        backgroundColor: 'skyblue',
        borderRadius:'10px',
        margin : '10',
        textAlign: 'right'
      }


    return(
        <div style={noProgress}className="statsFlex">
            <div style={progress}>
                <span>hola</span>
            </div>
        </div>
    )
}

export default ProgressBar