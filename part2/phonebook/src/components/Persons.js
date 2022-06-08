const Persons = ({data, filterValue, deleteNumber}) => {
    return (
        <>
            {data.filter(person => {
                if (!filterValue) {
                    return true
                } else {
                    return person.name.toLowerCase().includes(filterValue.toLowerCase())
                }
            }).map(person => 
                <p key={person.id}>
                    {person.name} {person.number}
                    <button onClick={() => deleteNumber(person.id)}>Delete</button>
                </p>)}
        </>
    )
}

export default Persons