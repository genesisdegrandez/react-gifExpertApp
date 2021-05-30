import React, { useState } from 'react'
import PropType from 'prop-types';

export const AddCategory = ({setCategories}) => { //aca recibimos el componente padre

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {//cuando la persona escribe
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {//el enter
        e.preventDefault();

        if (inputValue.trim().length>2){ //haciendo las validaciones para no recibir vacio
            setCategories(cats => [inputValue,...cats,]);
            setinputValue('');
            
        }   
       
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue}
                onChange={  handleInputChange }
            />
        </form>
    )
}



    AddCategory.prototype = { //para uilizar los componentes como es debido
        setCategories: PropType.func.isRequired
    }

