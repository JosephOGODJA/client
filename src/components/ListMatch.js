import React, { useState, useEffect } from 'react'
import axios from "axios";
import Grid from "./Grid";

function ListMatch2(params) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/games")
        .then((res) => {
          console.log(res.data.content)
          setGames(res.data)
        })
        .catch((err) => console.log(err))
  })

  return (
    <div className="App">
      <div>
        {
          games.map(game => <Grid logoA={game.logoA} teamA={game.teamA} logoB={game.logoB} teamB={game.teamB} />)
        }
      </div>
    </div>
  );
}


export default ListMatch2;