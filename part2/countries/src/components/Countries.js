import Country from './Country'

const Countries = ({data, handleShowCountry}) => {
    return (
        <>
            { 
                data.length > 10 
                ? 'Too many matches specify another filter' 
                : data.length === 1 
                ? <Country data={data[0]}/> 
                : data.map(country => 
                    <div key={country.ccn3}>
                        {country.name.common}
                        <button data-id={country.ccn3} onClick={handleShowCountry}>show</button>
                    </div>
                )
            }
        </>
    )
}

export default Countries