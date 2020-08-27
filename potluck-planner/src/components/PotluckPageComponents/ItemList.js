import React from 'react';


import { claimRecipe, removeRecipe } from '../../actions/specificEventActions';
import { useStateValue } from '../../hooks';


const ItemList = ({ recipe, user_id, eventID }) => {
    const [, dispatch] = useStateValue();
    let userSubmitted = recipe.full_name ? null : user_id;
    return (
        <div className="flex flex-col-reverse space-x-4 items-center">
            <div>
            <button
                className="bg-orange text-xs shadow-lg p-3 m-3"
                name={recipe.full_name ? 'times' : 'check'}
                aria-label={recipe.full_name ? 'unclaim' : 'claim'}
                onClick={() =>
                    claimRecipe(dispatch, eventID, {
                        recipe_name: recipe.recipe_name,
                        user_id: userSubmitted,
                    })
                }
            >
            Claim
            </button>
            <button
                className="bg-orange text-xs shadow-lg p-3 m-3"
                name='trash alternate'
                size='small'
                onClick={() => {
                    removeRecipe(dispatch, parseInt(eventID), {
                        data: {
                            recipe_name: recipe.recipe_name,
                        },
                    });
                }}
            >
                Remove
            </button>
            </div>
            <div className="text-md font-semibold">
                {recipe.recipe_name} - {recipe.full_name || ''}
            </div>
        </div>
    );
};

export default ItemList;
