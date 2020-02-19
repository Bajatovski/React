import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import RecipeList from "./components/Recipe/RecipeList";
import RecipeDetails from "./components/Recipe/RecipeDetails";
import CreateRecipe from "./components/Recipe/CreateRecipe";

class App extends Component {
    constructor(){
        super();
        this.state = {
            recipes:[]
        };
    }

    componentWillMount() {
        this.getRecipes();
    }

    getRecipes(){
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
                instructions:"Put the dow in the ovenut the dow in the oveut the dow in the ove ut the dow in the ove ut the dow in the ove ut the dow in the ove" +
                    "ut the dow in the ove ut the dow in the ove ut the dow in the ove ut the dow in the ove ut the dow in the ove ut the dow in the ove" +
                    "ut the dow in the ove ut the dow in the ove ut the dow in the ove ut the dow in the ove ut the dow in the ove"
            },
            {
                id: 2,
                name: "Cake",
                source: "Recipes.com",
                ingredients:[
                    {name:"Sugar"},
                    {name:"Oil"},
                    {name:"Eggs"},
                    {name:"Flour"},
                    {name:"Milk"}
                ],
                time:"02:50",
                instructions:"Eat it"
            }
        ];
        this.setState({
            recipes: allRecipes
        })
    }

    onDelete(id){
        console.log(id);
        this.setState({
            recipes:[...this.state.recipes.filter(r => r.id !== id)]
        })
    }; //
    handleOnCreate = (newRecipe) =>{
        console.log(newRecipe)
    this.setState({
                      recipes: [...this.state.recipes,newRecipe]
                  })
}
  render() {
    return (
        <div>

            {/*<RecipeList recipes={this.state.recipes} onDelete={()=>this.onDelete()}/>*/}
        <Router>
          <Route exact path="/" component={() => <RecipeList recipes={this.state.recipes} onDelete={()=>this.onDelete()} />}/>
            <Route exact path="/show/:id"  render={(props)=><RecipeDetails {...props} onDelete={this.onDelete} />} />
          <Route  path="/create" component={() => <CreateRecipe onHandleRequest={this.handleOnCreate} recipes={this.state.recipes}/>  }/>




        </Router>
        </div>
    );
  }
}

export default App;
