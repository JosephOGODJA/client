import React, { useState, useEffect } from 'react'
import axios from "axios";
import Match from "./Match";
import Grid2 from "./Grid2";

function ListMatch(params) {
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
          games.map(game => <Match logoA={game.logoA} teamA={game.teamA} logoB={game.logoB} teamB={game.teamB} />)
        }
      </div>
    </div>
  );
}


export default ListMatch;