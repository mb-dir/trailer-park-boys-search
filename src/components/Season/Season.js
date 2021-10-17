import SeasonContent from "../SeasonContent/SeasonContent";

import React from "react";
class Season extends React.Component{
    // Example state structure - single season will be passed to another component which will create the appropriate content
    state = {
        seasons: [
            {
                id:0,
                titles:["title 1 season 1", "title 2 season 1", "title 3 season 1", "title 4 season 1", "title 5 season 1"],
            },
            {
                id:1,
                titles:["title 1 season 2", "title 2 season 2", "title 3 season 2", "title 4 season 2", "title 5 season 2"],
            },
            {
                id:2,
                titles:["title 1 season 3", "title 2 season 3", "title 3 season 3", "title 4 season 3", "title 5 season 3"],
            },
            {
                id:3,
                titles:["title 1 season 4", "title 2 season 1", "title 3 season 1", "title 4 season 1", "title 5 season 4"],
            },
            {
                id:4,
                titles:["title 1 season 5", "title 2 season 1", "title 3 season 1", "title 4 season 1", "title 5 season 5"],
            },
            {
                id:5,
                titles:["title 1 season 6", "title 2 season 1", "title 3 season 1", "title 4 season 1", "title 5 season 6"],
            },
            {
                id:6,
                titles:["title 1 season 7", "title 2 season 1", "title 3 season 1", "title 4 season 1", "title 5 season 7"],
            },

        ],
    }
    render(){
        return(
            <main>
                <SeasonContent data={this.state.seasons}/>
            </main>
        );
    }
}

export default Season;