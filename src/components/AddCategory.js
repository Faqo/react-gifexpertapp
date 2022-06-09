import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSumit= (e) =>{
        e.preventDefault();
        // console.log('Submit hecho');

        if (inputValue.trim().length > 2 ){
            setCategories( cats => [ inputValue,...cats]);
            setInputValue('');
        }

        //gracias a el callback de la funcion se puede agregar sin saber que contenia
        // el arreglo desde el componente.
    }

    return (
        <form onSubmit={handleSumit}>
            <h1>{inputValue}</h1>
            <input
                type="text"
                value={ inputValue }
                onChange= { handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}