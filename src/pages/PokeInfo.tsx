import style from './css/pokeInfo.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from '../components/shared/Header';

export const PokeInfo = () => {
  const { idPokemon } = useParams();

  const [poke, setPoke] = useState<any>()
  const [hasError, setHasError] = useState<boolean>(false)

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
    axios.get(url)
      .then(res => {
        setPoke(res.data)
        setHasError(false)
      })
      .catch(err => {
        setHasError(true)
        console.log(err)
      })
  }, [])


  if (hasError) {
    return <h1> The Pokemon With Name "{idPokemon}" not found🍕🍔🍟🌭🍿</h1>
  } else {
    return (
      <div className={style.pokeinfo}>
        <div className={style.pokeinfoContainer}>
          <div className={`${style.pokeinfoHeader} bg-${poke?.types[0].type.name}`}>
            <div className={style.pokeinfoHeaderImg}>
              <img src={poke?.sprites.other['official-artwork'].front_default} alt="" />
            </div>
          </div>

          <div className={style.pokeInfoMain}>
            <div className={style.pokeInfoMainId}>
              <span className={style.pokeInfoId}>
                #{poke?.id}
              </span>
            </div>

            <div className={style.pokeInfoMainName}>
              <div className={style.pokeInfoNameHr}><hr /></div>
              <h1 className={`name-${poke?.types[0].type.name}`}>{poke?.name}</h1>
              <div className={style.pokeInfoNameHr}><hr /></div>
            </div>

            <div className={style.pokeInfoMainHeightWeight}>
              <div className={style.pokeInfoHeightWeight}>
                <p>Height</p>
                <span>{poke?.height}</span>
              </div>
              <div className={style.pokeInfoHeightWeight}>
                <p>Weight</p>
                <span>{poke?.weight}</span>
              </div>
            </div>

            <div className={style.pokeInfoMainTypeAbilities}>
              <div className={style.pokeInfoTypeAbilities}>
                <p>Types</p>
                <div>
                  {
                    poke?.types.map((type: any) => (
                      <span className={`bg-${type.type.name}`} key={type.type.name}>{type.type.name}</span>
                    ))
                  }
                </div>
              </div>
              <div className={style.pokeInfoTypeAbilities}>
                <p>Abilities</p>
                <div>
                  {
                    poke?.abilities.map((abilitie: any) => (
                      <span key={abilitie.ability.name}>{abilitie.ability.name}</span>
                    ))
                  }
                </div>
              </div>
            </div>

            {/* <div className={style.pokeInfoStats}>
              <PokeGraphStats poke={poke} />
              <p>Stats</p>
                            {
                                poke?.stats.map(stat => (
                                    <span key={stat.stat.name}>{stat.stat.name} {stat.base_stat}</span>
                                ))
                            }
            </div> */}
            
          </div>
        </div>

        <div className={style.pokeinfoMovementsContainer}>
          <div className={style.pokeInfoMovementsTitle}>
            <h1>Movements</h1><div className={style.pokeInfoNameHr}><hr /></div>
          </div>
          <div className={style.pokeInfoMovementsList}>
            {
              poke?.moves.map((move: any) => (
                <span key={move.move.name}>{move.move.name}</span>
              ))
            }
          </div>
        </div>

      </div>
    )
  }
}