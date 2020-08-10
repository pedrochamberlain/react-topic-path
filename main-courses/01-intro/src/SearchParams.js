import React, { useState } from 'react'
import { ANIMALS } from '@frontendmasters/pet'

const SearchParams = () => {
    const [location, setLocation] = useState('Seattle, WA')
    const [animal, setAnimal] = useState('Dog')
    const [breed, setBreed] = useState('')
    const [breeds, setBreeds] = useState([])

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        onChange={
                            (e) => setLocation(e.target.value)
                        }
                        placeholder="Location"
                    />
                </label>

                <label htmlFor="Animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={
                            (e) => setAnimal(e.target.value)
                        }
                        onBlur={
                            (e) => setAnimal(e.target.value)
                        }
                    >
                        <option>All</option>
                        {ANIMALS.map(animal => (
                            <option key={animal} value={animal}>
                                {animal}
                            </option>
                        ))}

                    </select>
                </label>

                <label htmlFor="Breed">
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        onChange={
                            (e) => setBreed(e.target.value)
                        }
                        onBlur={
                            (e) => setBreed(e.target.value)
                        }
                        disabled={breeds.length === 0}
                    >
                        <option>All</option>
                        {breeds.map(breed => (
                            <option key={breed} value={breed}>
                                {breed}
                            </option>
                        ))}

                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams