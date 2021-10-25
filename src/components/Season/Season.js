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
                // the episode id is a two-digit number, so we can calculate the index of the element which matches woth user entry in such a way: subtract 1 from the remainder when dividing by 10
                const elIndex = (el2.episodeID%10)-1;

                // In order to update the hidden value in props we have to have index of the match element(above we have it) and the season number which we can calculate in such a way: if eposideID = 11(it is 1st season) Math.floor(el2.episodeID/10) returnes 1, and the arrays are numberd from 0 so we have to subtract 1, when the eposideID = 21 Math.floor(el2.episodeID/10) returnes 2 and 2-1 = 1
                const whichSeason = Math.floor(el2.episodeID/10)-1;

                // New array - in this array I will update the appropriate value and I will set new state with this new array
                const newElements = [...this.state.seasons];
                if(el2.title.includes(e.target.value)){
                    newElements[whichSeason].titles[elIndex].hidden = false;
                }else{
                    newElements[whichSeason].titles[elIndex].hidden = true;
                }
                console.log(newElements[whichSeason].titles);
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