import React,{Component} from 'react';
import LineCharStatistics from "./LineCharStatistics";
import BarCharStatistics from "./BarCharStatistics";

export class Home extends Component{
    render(){
        return(
            <div>
                <h1>Line Statistics...</h1>
                <LineCharStatistics/>
                
                <br></br>
                <h1>Bar Statistics...</h1>
                <BarCharStatistics/>
            </div>
            
        )
    }
}