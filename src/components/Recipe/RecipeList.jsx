import React, {Component} from 'react';
import RecipeListItem from "./RecipeListItem";
import {Link} from "react-router-dom";
// import uuid from 'react-uuid';

class RecipeList extends Component {
    constructor(){
        super();
        this.state = {
            recipes:[]
        };
    }
    //
    componentWillMount() {
        this.getRecipes();
    }

    getRecipes(){
        this.setState({
            recipes:this.props.recipes
        })

    }

    onDelete(id){

        this.setState({
            recipes:[...this.state.recipes.filter(r => r.id !== id)]
        })
    }


    render() {
        return (
            <div>
                <Link to={"/create"} className="btn btn-primary">Create new</Link>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Number of Ingredients</th>
                            <th>Ingredients</th>
                            <th>Source</th>
                            <th>Time</th>
                            <th>Instructions</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                {this.state.recipes.map( (recipe) => (
                    <RecipeListItem  key={recipe.id} recipe={recipe}  onDelete={this.onDelete.bind(this, recipe.id)}
                    />
                ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default RecipeList;
