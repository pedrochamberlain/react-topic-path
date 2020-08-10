import React, { useState, useEffect } from 'react'
import pet, { ANIMALS as animals } from '@frontendmasters/pet'
import useDropdown from './useDropdown'

const SearchParams = () => {
    const [location, setLocation] = useState('Seattle, WA')
    const [breeds, setBreeds] = useState([])

    const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', animals)
    const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds)

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
            <form>
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
        </div>
    )
}

export default SearchParams