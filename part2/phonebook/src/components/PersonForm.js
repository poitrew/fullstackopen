const PersonForm = ({handleSubmit, nameValue, handleNameChange, numberValue, handleNumberChange}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input type='text' value={nameValue} onChange={handleNameChange} />
            </div>
            <div>
                number: <input type='tel' value={numberValue} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm