import { PokeCard } from '../components/Pokedex/PokeCard';
import { useGetPokemonsQuery } from '../api/pokemonsApi';
import Pagination from '@mui/material/Pagination';
import { useNavigate } from 'react-router-dom';
import style from './css/pokedex.module.css';
import { useState } from 'react';
import { SelectTypes } from '../components/Pokedex/SelectTypes';

export const Pokedex = () => {
  const [type, setType] = useState('allpokemons');
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { data: pokemons, isLoading } = useGetPokemonsQuery({ page: page - 1, type });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const inputValue = e.target.pokemon.value.trim().toLowerCase();
    navigate(`/${inputValue}`);
    e.target.pokemon.value = '';
  };

  const handleChangePage = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleTypeChange = (selectedType: string) => {
    setType(selectedType);
    setPage(1);
  };

  return (
    <div className={style.pokedex}>
      <div className={style.pokedexContainerFormSelect}>
        <form className={style.pokedexContainerForm} onSubmit={handleSubmit}>
          <input className={style.pokedexContainerFormInput} id='pokemon' type="text" />
          <button className={style.pokedexContainerFormBtn}>Search</button>
        </form>
        <SelectTypes onTypeChange={handleTypeChange} />
      </div>

      {
        isLoading ? (
          <p>Loading...</p>
        ) : (
          pokemons && (
            <div>
              <div className={style.pokedexPokemon}>
                {pokemons.results.map((pokemon: any) => (
                  <PokeCard key={pokemon.url} pokemon={pokemon} />
                ))}
              </div>

              {
                type == 'allpokemons' && (
                  <div className={style.paginatorContainer}>
                    <Pagination
                      count={Math.ceil(pokemons.count / 10)}
                      page={page}
                      onChange={handleChangePage}
                    />
                  </div>
                )
              }
            </div>
          )
        )
      }
    </div>
  );
};