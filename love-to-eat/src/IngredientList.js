import React from 'react';

class IngredientList extends React.Component {

  renderIngredients() {
    let ingredientsArr = [];
    this.props.ingredientList.map((item, i) => {
      ingredientsArr.push(<li className="list-group-item" item={item} key={i} >Quantity: {item.quantity} - Ingredient: {item.ingredient}</li>);
    });
    return ingredientsArr;
  }

  render() {
    return(
      <div>
        <ul className="list-group">
          {this.renderIngredients()}
        </ul>
      </div>
    );
  }
}

export default IngredientList;
