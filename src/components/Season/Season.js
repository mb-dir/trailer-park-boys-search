import SeasonContent from "../SeasonContent/SeasonContent";
import "./season.css";

import React from "react";
class Season extends React.Component{
    // Example state structure - single season will be passed to another component which will create the appropriate content
    state = {
        seasons: [
            {
                id:0,
                // episodeID 11 means 1st season and 1st episode, 12 means 1st season and 2nd episode etc 
                titles:[{title: "title 1 season 1", episodeID:11, hidden: false}, {title: "title 2 season 1", episodeID:12, hidden: false}, {title: "title 3 season 1", episodeID:13, hidden: false}, {title: "title 4 season 1", episodeID:14, hidden: false}, {title: "title 5 season 1", episodeID:15, hidden: false}],
            },

        ],
    }

    inputHandler(e){
        for(const el of this.state.seasons){
            for(const el2 of el.titles){
                if(el2.includes(e.target.value)){
                    console.log(el2);
                }
            }
        }
    }

    render(){
        return(
            <main className="seasons">
                <form>
                    <label htmlFor="searcher">Search season</label>
                    <input type="text" id="searcher" onChange={this.inputHandler.bind(this)}/>
                </form>
                <section className="seasons__season">
                    <h2 className="seasons__titleSeason">Season 1</h2>
                    <div className="seasons__content">
                        <SeasonContent data={this.state.seasons[0]}/>
                    </div>
                </section>
            </main>
        );
    }
}

export default Season;