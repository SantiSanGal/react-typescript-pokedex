import style from './../css/selectTypes.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const SelectTypes = () => {
    const [types, setTypes] = useState<any>()

    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/type'
        axios.get(url)
            .then(res => setTypes(res.data))
            .catch(err => console.log(err))
    }, [])


    const handleChange = (_e: any) => {
        //a quí iría la acción a tomar
    }

    console.log('types', types);

    return (
        <select className={style.select} onChange={handleChange}>
            <option value="allpokemons">All Pokemons</option>
            {
                types?.results.map((type: any) => (
                    <option key={type.url} value={type.url}>{type.name}</option>
                ))
            }
        </select>
    )
}