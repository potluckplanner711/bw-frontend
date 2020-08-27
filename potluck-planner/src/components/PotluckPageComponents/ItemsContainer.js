import React, { useState } from 'react';
// import headerImg from '../../images/brooke-lark-nTZOILVZuOg-unsplash.jpg';

import { addRecipe } from '../../actions';
import { useStateValue } from '../../hooks';

import ItemList from './ItemList';


const ItemsContainer = ({ recipes, user_id, eventID, isHost }) => {
    const [recipe, setRecipe] = useState({ recipe_name: '' });
    const [, dispatch] = useStateValue();

    const addNewRecipe = e => {
        e.preventDefault();
        addRecipe(dispatch, eventID, recipe);
        setRecipe({ recipe_name: '' });
    };

    return (
        <div className="bg-apricot p-4 flex flex-col items-center">
            <h3 className="text-1xl font-extrabold">Choose a dish</h3>
            {typeof recipes === 'object' &&
                recipes.map(recipe => (
                    <ItemList
                        recipe={recipe}
                        user_id={user_id}
                        eventID={eventID}
                        key={recipe.recipe_name}
                    />
                ))}
            {isHost && (
                <form onSubmit={e => addNewRecipe(e)} aria-label="add recipe">
                    <input
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        type='text'
                        aria-label='new recipe input'
                        value={recipe.recipe_name}
                        placeholder='Add Dish'
                        onChange={e =>
                            setRecipe({ recipe_name: e.target.value })
                        }
                    />
                    <button class="bg-orange p-3" onSubmit={e => addNewRecipe(e)} aria-label='add dish button'>Add Dish</button>
                </form>
            )}
        </div>
    );
};

export default ItemsContainer;
