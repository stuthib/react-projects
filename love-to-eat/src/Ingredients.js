import React from 'react';

class Ingredients extends React.Component {

  constructor(props) {
    super(props);
    this.addIngredients = this.addIngredients.bind(this);
   }

   addIngredients() {
     this.props.onAddIngredientBtnClick(this.quantity.value, this.ingredient.value);
     if(this.quantity.value !== undefined) {
       this.quantity.value = "";
     }
     if(this.ingredient.value !== undefined) {
       this.ingredient.value = "";
     }

   }

   render() {
    return(
        <div className="form-inline form-group">
            <label htmlFor="quantity">Quantity</label>
            <input type="text"
                   className="form-control"
                   id="quantity"
                   placeholder="Quantity"
                   ref={(quantity) => {this.quantity = quantity; }} />
            <label htmlFor="ingredient">Ingredient</label>
            <input type="text"
                   className="form-control"
                   id="ingredient"
                   placeholder="Ingredient"
                   ref={(ingredient) => {this.ingredient = ingredient;}} />
            <button type="button" className="btn btn-info" onClick={this.addIngredients}>Add</button>
          </div>
    );
  }
}

export default Ingredients;
