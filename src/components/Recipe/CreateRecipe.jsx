import React, {Component} from 'react';
import Redirect from "react-router-dom/es/Redirect";

class CreateRecipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: [
                {name: "Sugar"},
                {name: "Oil"},
                {name: "Eggs"},
                {name: "Flour"},
                {name: "Milk"},
                {name: "Salt"},
                {name: "Tomatoes"},
                {name: "Peppers"},
                {name: "Cheese"},
                {name: "Potatoes"},
                {name: "Meat"}
            ],
            values: []
        }
    }

    onSubmit(e) {
        e.preventDefault();
        this.handleOnCreate();

    }




    handleOnCreate = () => {
        var options = this.refs.ingredients;
        let ingredients = [];
        for (var i = 0; i < options.length; i++) {
            if (options[i].selected) ingredients.push({name:options[i].value})
        }
        const newRecipe = {
            name: this.refs.name.value,
            source: this.refs.source.value,
            time: this.refs.time.value,
            instructions: this.refs.instructions.value,
            ingredients: ingredients

        };
        this.props.onHandleRequest(newRecipe);

        return <Redirect to='/' />
    }


    render() {
        return (
            <div className="container">
                <h1>Add new recipe </h1> <br/>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="name" name="name" ref="name" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Source</label>
                        <input type="name" name="source" ref="source" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Time</label>
                        <input type="time" name="time" ref="time" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Instructions</label>
                        <textarea name="instructions" ref="instructions"
                                  className="form-control">Instruction here</textarea>
                    </div>
                    <div className="form-group">
                        <label>Ingredients</label>
                        <select className="form-control" name="ingredients" ref="ingredients" multiple={true}>
                            {
                                this.state.ingredients.map(i => (
                                    <option value={i.name}>{i.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <input type="submit" value="Create"/>
                </form>
            </div>
        );
    }
}

export default CreateRecipe;
