import { PokeCard } from '../components/Pokedex/PokeCard';
import { useGetPokemonsQuery } from '../api/pokemonsApi';
import Pagination from '@mui/material/Pagination';
import { useNavigate } from 'react-router-dom';
import style from './css/pokedex.module.css';
import { useState } from 'react';
import { SelectTypes } from '../components/Pokedex/SelectTypes';

export const Pokedex = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { data: pokemons, isLoading } = useGetPokemonsQuery(page - 1);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const inputValue = e.target.pokemon.value.trim().toLowerCase();
    navigate(`/${inputValue}`);
    e.target.pokemon.value = '';
  };

  const handleChangePage = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };


  // const handleNextPage = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };

  // const handlePrevPage = () => {
  //   setPage((prevPage) => prevPage - 1);
  // };

  return (
    <div className={style.pokedex}>
      <div className={style.pokedexContainerFormSelect}>
        <form className={style.pokedexContainerForm} onSubmit={handleSubmit}>
          <input className={style.pokedexContainerFormInput} id='pokemon' type="text" />
          <button className={style.pokedexContainerFormBtn}>Search</button>
        </form>
        <SelectTypes/>
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

              <div className={style.paginatorContainer}>

                {/* <button onClick={handlePrevPage}>Prev Page</button>
                <button onClick={handleNextPage}>Next Page</button> */}

                <Pagination
                  count={Math.ceil(pokemons.count / 10)}
                  page={page}
                  onChange={handleChangePage}
                // sx={{
                //   '& .MuiPaginationItem-root': {
                //     color: '#FE1936',
                //   },
                //   '& .Mui-selected': {
                //     backgroundColor: '#FE1936',
                //     color: '#FFFFFF',
                //   }
                // }}
                />

              </div>
            </div>
          )
        )
      }
    </div>
  );
};
