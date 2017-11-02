import React from 'react';
import Ingredients from './Ingredients';
import IngredientList from './IngredientList';

class Submit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      recipies : localStorage.getItem('recipies') || [],
      newRecipie : {
        name : 'New Recipie',
        description : 'Description',
        ingredients : []
      }
    };
    this.submitRecipeClick = this.submitRecipeClick.bind(this);
    this.handleAddIngredientBtnClick = this.handleAddIngredientBtnClick.bind(this);
  }

  submitRecipeClick() {
    //console.log('Submit Recipie');
		//console.log(this.name.value, this.description.value);
		let newRecipie = this.state.newRecipie;
    let allRecipies = this.state.recipies.slice();
		newRecipie.name = this.name.value;
		newRecipie.description = this.description.value;
		newRecipie.image = this.state.uploadedFileCloudinaryUrl;
		this.setState((prevState) => {
      return {
        newRecipie : newRecipie,
        recipies: allRecipies
      }
    });
    localStorage.setItem('recipies', allRecipies);
  }

  handleAddIngredientBtnClick(quantity, ingredient) {
    //console.log("Add Ingredients in Submit js", quantity, ingredient);
		let newRecipie = this.state.newRecipie;
		newRecipie.ingredients.push({quantity: quantity, ingredient: ingredient});
		this.setState((prevState) => {
      return {
        newRecipie: newRecipie,
        recipies: prevState.recipies
      }
    });
		//console.log(newRecipie);
  }

  render() {
    return(
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text"
                     className="form-control"
                     id="name"
                     placeholder="Enter the name of the recipie"
                     ref={(name) => {this.name = name;}} />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea className="form-control"
                        id="description"
                        placeholder="Enter a brief description of the recipie"
                        ref={(description) => {this.description = description;}} />
            </div>


            <Ingredients onAddIngredientBtnClick={(quantity, ingredient) => this.handleAddIngredientBtnClick(quantity, ingredient)} />
            <div className="form-group">
              <IngredientList ingredientList={this.state.newRecipie.ingredients} />
            </div>
            <button type="button" onClick={this.submitRecipeClick} className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Submit;
