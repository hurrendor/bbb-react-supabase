import { useMemo, useState } from 'react'
import './CSS/AllBathrooms.css'
import { motion as m } from 'framer-motion'

export default function AllBathrooms({ bathrooms, reviews }) {

    const [query, setQuery] = useState('')

    const filteredBathrooms = useMemo(() => {
        return bathrooms.filter(b => b.location_name.toLowerCase().includes(query.toLowerCase()))
    }, [bathrooms, query]) 

    function allTheBathrooms() {
        return (
            <div id='all-bathrooms'>
                {filteredBathrooms.map((bathroom) => (

                    <div className='one-bathroom-all' id={bathroom.location_name} key={bathroom.location_name}>
                        <h2>{bathroom.location_name}</h2>
                        <h3>{bathroom.address}</h3>
                        <p>{bathroom.description}</p>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div id='all-bathrooms-search'>
                <label htmlFor='search'>Search:</label>
                <input id='search' value={query} onChange={e => setQuery(e.target.value)} type='search'></input>
            </div>
            {bathrooms !== undefined ? allTheBathrooms() : <h2>loading...</h2>}
        </m.div>
    )
}