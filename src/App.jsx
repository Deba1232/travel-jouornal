import React from 'react'

import './App.css'

import Header from './components/Header'
import Places from './components/Places'

import data from './data'

function App(){
    const placeElements = data.map((place) => {
        return <Places 
                key = {place.title}
                place = {place} 
                />
    })

    return (
        <div className='App'>
            <Header />
            {placeElements}
        </div>
    );
}

export default App