import React, { useState, useEffect } from 'react'
import pet, { ANIMALS as animals } from '@frontendmasters/pet'

import Results from '../components/Results'
import useDropdown from '../components/useDropdown'

const SearchParams = () => {
    const [location, setLocation] = useState('Seattle, WA')
    const [breeds, setBreeds] = useState([])

    const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', animals)
    const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds)
    const [pets, setPets] = useState([])

    async function requestPets() {
        const { animals } = await pet.animals({
            location,
            breed,
            type: animal
        })

        setPets(animals || [])
    }

    useEffect(() => {
        setBreeds([])
        setBreed('')

        pet.breeds(animal)
            .then(({ breeds: apiBreeds }) => {
                const breedStrings = apiBreeds.map(({ name }) => name)
                setBreeds(breedStrings)
            })
            .catch(() => {
                console.error('Error while updating breeds')
            })
    }, [animal, setBreed, setBreeds])

    return (
        <div className="search-params">
            <form onSubmit={(e) => {
                e.preventDefault()
                requestPets()
            }}>
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        placeholder="Location"
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </label>
                <AnimalDropdown />
                <BreedDropdown />
                <button>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    )
}

export default SearchParams