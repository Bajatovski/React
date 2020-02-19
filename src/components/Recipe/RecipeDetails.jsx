import React, {Component} from 'react';

class RecipeDetails extends Component {

    constructor(){
        super();
        this.state = {
            recipe:null
        }
    }

    componentWillMount() {
        this.getRecipes();
        // console.log(this.props.recipe);
    }

    getRecipes(){
        let recipeId = this.props.match.params.id;
        let allRecipes = [
            {
                id: 1,
                name: "Pizza",
                source: "Wikipedia",
                ingredients:[
                    {name:"Eggs"},
                    {name:"Flour"},
                    {name:"Milk"}
                ],
                time:"00:50",
                instructions:"Put the dow in the oven"
            },
            {
                id: 2,
                name: "Cake",
                source: "Recipes.com",
                ingredients:[
                    {name:"Eggs"},
                    {name:"Flour"},
                    {name:"Milk"},
                    {name:"Sugar"},
                    {name:"Oil"}
                ],
                time:"02:50",
                instructions:"Eat it"
            }
        ];
        let recipe = allRecipes.filter(r => r.id === parseInt(recipeId))[0];
        // console.log(recipe)
        this.setState({
            recipe: recipe
        });
    }
    // deleteMe = () =>{
    //     this.props.onDelete(this.props.match.params.id);
    //     this.props.history.push("/");
    // };

    render() {
        const {name,instructions,ingredients,source,time} = this.state.recipe;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>Name:{name}</p>
                        <p>Source:{source}</p>
                        <label>Ingredients</label><ul>
                            {ingredients.map(ingredient => (
                                <li>{ingredient.name}</li>
                            ))}
                        </ul>
                        <p>Number of ing:{ingredients.length}</p>
                        <p>Time:{time}</p>
                        <input type="button" value="Delete" className="btn btn-danger btn-sm"/>
                    </div>
                    <div className="col-md-6">
                        <p>Instructions:{instructions}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipeDetails;
