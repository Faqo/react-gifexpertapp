import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ()=>{

    // const categories = ['One punch', 'Samurai x', 'Dragon ball'];
    
    const [categories, setCategories] = useState(['']);

    // const handleAdd = () => {
    //     // setCategories([...categories,'HunterX']);
    //     setCategories( cats => [...cats, 'HunterxHunter']);

    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map( (category) => 
                        // <li key={category}> {category} </li>
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    );
}
