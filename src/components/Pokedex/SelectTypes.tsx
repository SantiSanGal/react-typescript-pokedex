import style from './../css/selectTypes.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const SelectTypes = ({ onTypeChange }: { onTypeChange: (type: string) => void }) => {
    const [types, setTypes] = useState<any>()

    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/type'
        axios.get(url)
            .then(res => setTypes(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleChange = (e: any) => {
        onTypeChange(e.target.value);
    }

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
