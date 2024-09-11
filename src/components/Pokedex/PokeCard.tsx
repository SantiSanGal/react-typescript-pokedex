import style from './../css/pokeCard.module.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const PokeCard = ({ pokemon }: any) => {
    const [poke, setPoke] = useState<any>();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(pokemon.url)
            .then(res => setPoke(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleClick = () => {
        navigate(`/${poke.id}`)
    }

    return (
        <div onClick={handleClick} className={`${style.pokecard} border-${poke?.types[0].type.name}`}>
            <header className={`${style.pokecardHeader} bg-${poke?.types[0].type.name}`}>
                <img className={style.pokecardHeaderImg} src={poke?.sprites.other['official-artwork'].front_default} alt="" />
            </header>
            <div className={style.pokecardHeaderSpace}></div>
            <h2 className={`${style.pokecardName} name-${poke?.types[0].type.name}`}>{poke?.name}</h2>
            <ul className={style.pokecardContainerType}>
                {
                    poke?.types.map((type: any) => (
                        <li className={style.pokecardType} key={type.type.name}> {type.type.name} </li>
                    ))
                }
            </ul>

            <hr className={style.pokecardHr} />

            <ul className={style.pokecardContainerStats}>
                {
                    poke?.stats.map((stat: any) => (
                        <li className={style.pokecardStatsData} key={stat.stat.url}>
                            <span className={style.pokecardStatsName}>{stat.stat.name}</span>
                            <span className={`${style.pokecardStatsBase} color-${poke?.types[0].type.name}`}>{stat.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}