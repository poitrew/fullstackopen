import { useEffect, useState } from 'react'
import axios from 'axios'
import Query from './components/Query'
import Countries from './components/Countries'

const App = () => {
    const [countries, setCountries] = useState([])
    const [query, setQuery] = useState('')
    const [filteredData, setFilteredData] = useState([])

    const handleChange = (e) => {
        const newQuery = e.target.value
        if (newQuery !== '') {
            setFilteredData(countries.filter(country => country.name.common.toLowerCase().includes(newQuery.toLowerCase())))
        }
        setQuery(newQuery)
    }

    const handleShowCountry = (e) => {
        setFilteredData(filteredData.filter(country => country.ccn3 === e.target.dataset.id))
    }

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(res => {
                setCountries(res.data)
            })
    }, [])

    return (
        <div>
            <Query val={query} handleChange={handleChange}/>
            <Countries data={filteredData} handleShowCountry={handleShowCountry} />
        </div>
    )
}

export default App