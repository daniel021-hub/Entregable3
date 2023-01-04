import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentCard = ({urlResident}) => {
    const [resident, setResident] = useState() 

    useEffect(() => {
        axios.get(urlResident)
        .then(res => setResident(res.data))
        .catch(err => console.log(err))
    }, [])

  return (
    <article className='resident-card'>
        <header className='resident-card_header'>
            <img src={resident?.image} alt="" />
            <div className='resident-card_status'>
                <div className={`circle ${resident?.status}`}></div>
                <span>{resident?.status}</span>
            </div>
        </header>
        <section className='resident-card_body'>
            <h2>{resident?.name}</h2>
            <ul>
                <li><span>Specie: </span>{resident?.species}</li>
                <li><span>Origin: </span>{resident?.origin.name}</li>
                <li><span>Episodes where appear: </span>{resident?.episode.length}</li>
            </ul>

        </section>
    </article>
  )
}

export default ResidentCard
