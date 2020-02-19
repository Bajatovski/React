import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class RecipeListItem extends Component {
    render() {

        const {id, name, time,source,instructions,ingredients} = this.props.recipe;
        function getTime(time){
            let timez = time.split(":");
            let hours = parseInt(timez[0]);
            let minutes = parseInt(timez[1]);
            if (hours > 0){
                return hours+" hours "+minutes+" minutes";
            } else {
                return minutes+" minutes";
            }
        }
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{ingredients.length}</td>
                <td>{
                    ingredients.length <=3 ?
                        (ingredients.slice(0,ingredients.length).map(ingredient => ingredient.name)+"")
                    :
                        (ingredients.slice(0,3).map(ingredient => ingredient.name)+" ...")
                }</td>
                <td>{source}</td>
                <td>
                    {getTime(time)}
                </td>
                {
                    instructions.split(' ').length<50 ?
                        (instructions)
                        :
                        (instructions.slice(0,50))
                }
                <td>
                    <Link className="btn btn-primary btn-sm" to={"/show/"+id} recipe={this.props.recipe} >Show</Link> &nbsp;
                    <input type="button" value="Delete" className="btn btn-danger btn-sm" onClick={this.props.onDelete}/>
                </td>
            </tr>
            );
    }
}

export default RecipeListItem;
