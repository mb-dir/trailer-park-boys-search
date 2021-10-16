import React from "react";
class Season extends React.Component{
    // Example state structure - single season will be passed to another component which will create the appropriate content
    state = {
        seasons: [
            {
                id:0,
                titles:["title 1", "title 2"],
            },
            {
                id:1,
                titles:["title 11", "title 22"],
            },
            {
                id:2,
                titles:["title 111", "title 222"],
            },
        ],
    }
    render(){
        return(
            <h2>{this.props.seasonData.title}</h2>
        );
    }
}

export default Season;