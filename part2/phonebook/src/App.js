import { useEffect, useState } from 'react'

import phoneBookService from './services/phonebook'

import Notification from './components/Notification'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
    const [persons, setPersons] = useState([]) 
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [notificationMsg , setNotificationMsg] = useState('')
    const [error, setError] = useState(false)

    const handleNameChange = (e) => {
        setNewName(e.target.value)
    }

    const handleNumberChange = (e) => {
        setNewNumber(e.target.value)
    }

    const handleFilterChange = (e) => {
        setFilter(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newPerson = {
            name: newName,
            number: newNumber,
        }

        if (persons.some(person => person.name === newName)) {
            const existedPerson = persons.find(person => person.name === newName)
            if (window.confirm(`${existedPerson.name} is already in the phonebook, replace the old number with a new one?`)) {
                phoneBookService.updateNumber(existedPerson.id, newPerson)
                .then(updatedNumber => {
                    setPersons(persons.map(person => person.id === existedPerson.id ? updatedNumber : person))
                    setNotificationMsg(`Changed ${newName} number from ${existedPerson.number} to ${newNumber}`)
                    setTimeout(() => setNotificationMsg(''), 5000)
                }).catch(err => {
                    setNotificationMsg(`Information of ${newName} has already been removed from the server`)
                    setError(true)
                    setTimeout(() => {
                        setNotificationMsg(null)
                        setError(false)
                    }, 5000)
                })
            }
        } else {
            phoneBookService.addNumber(newPerson).then(addedNumber => setPersons(persons.concat(addedNumber)))
            setNotificationMsg(`Added ${newName}`)
            setTimeout(()=> setNotificationMsg(''), 5000)
        }
        setNewName('')
        setNewNumber('')
    }

    const handleDelete = (id) => {
        const deletePerson = persons.find(person => person.id === id)
        if (window.confirm(`Delete ${deletePerson.name}?`)) {
            phoneBookService.deleteNumber(id).then(res => console.log(`Deleted ${deletePerson.name}`))
            setPersons(persons.filter(person => person.id !== id))
        }
    }

    useEffect(() => {
        phoneBookService.fetchNumbers().then(numbers => setPersons(numbers))
    }, [])

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={notificationMsg} isError={error} />
            <Filter filterValue={filter} handleChange={handleFilterChange} />
            <h3>add a new</h3>
            <PersonForm handleSubmit={handleSubmit} nameValue={newName} handleNameChange={handleNameChange} numberValue={newNumber} handleNumberChange={handleNumberChange}/>
            <h2>Numbers</h2>
            <Persons data={persons} filterValue={filter} deleteNumber={handleDelete}/>
        </div>
    )
}

export default App