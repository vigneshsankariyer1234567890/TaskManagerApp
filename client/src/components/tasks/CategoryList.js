import React, {PropTypes} from 'react';

const CategoryList =({categories}) => {
    return(
        <div>
            <h3> Categories </h3>
            <ul>
                {categories.map(category=>
                    <li key={category.id}> {category.name} </li>
                )}
            </ul>
        </div>
    )
}

CategoryList.propTypes = {
    categories: PropTypes.array.isRequired
};

export default CategoryList