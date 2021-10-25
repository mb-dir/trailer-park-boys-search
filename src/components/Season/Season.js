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
            {
                id:1,
                titles:[{title: "title 1 season 1", episodeID:21, hidden: false}, {title: "title 2 season 1", episodeID:22, hidden: false}, {title: "title 3 season 1", episodeID:23, hidden: false}, {title: "title 4 season 1", episodeID:24, hidden: false}, {title: "title 5 season 1", episodeID:25, hidden: false}],
            },
            {
                id:2,
                titles:[{title: "title 1 season 1", episodeID:31, hidden: false}, {title: "title 2 season 1", episodeID:32, hidden: false}, {title: "title 3 season 1", episodeID:33, hidden: false}, {title: "title 4 season 1", episodeID:34, hidden: false}, {title: "title 5 season 1", episodeID:35, hidden: false}],
            },
            {
                id:3, 
                titles:[{title: "title 1 season 1", episodeID:41, hidden: false}, {title: "title 2 season 1", episodeID:42, hidden: false}, {title: "title 3 season 1", episodeID:43, hidden: false}, {title: "title 4 season 1", episodeID:44, hidden: false}, {title: "title 5 season 1", episodeID:45, hidden: false}],
            },
            {
                id:4,
                titles:[{title: "title 1 season 1", episodeID:51, hidden: false}, {title: "title 2 season 1", episodeID:52, hidden: false}, {title: "title 3 season 1", episodeID:53, hidden: false}, {title: "title 4 season 1", episodeID:54, hidden: false}, {title: "title 5 season 1", episodeID:55, hidden: false}],
            },
            {
                id:5,
                titles:[{title: "title 1 season 1", episodeID:61, hidden: false}, {title: "title 2 season 1", episodeID:62, hidden: false}, {title: "title 3 season 6", episodeID:63, hidden: false}, {title: "title 4 season 1", episodeID:64, hidden: false}, {title: "title 5 season 6", episodeID:65, hidden: false}],
            },
            {
                id:6,
                titles:[{title: "title 1 season 1", episodeID:71, hidden: false}, {title: "title 2 season 1", episodeID:72, hidden: false}, {title: "title 3 season 1", episodeID:73, hidden: false}, {title: "title 4 season 1", episodeID:74, hidden: false}, {title: "title 5 season 7", episodeID:75, hidden: false}],
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
                this.setState({seasons: newElements});
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
                <section className="seasons__season">
                    <h2 className="seasons__titleSeason">Season 2</h2>
                    <div className="seasons__content">
                        <SeasonContent data={this.state.seasons[1]}/>
                    </div>
                </section>
                <section className="seasons__season">
                    <h2 className="seasons__titleSeason">Season 3</h2>
                    <div className="seasons__content">
                        <SeasonContent data={this.state.seasons[2]}/>
                    </div>
                </section>
                <section className="seasons__season">
                    <h2 className="seasons__titleSeason">Season 4</h2>
                    <div className="seasons__content">
                        <SeasonContent data={this.state.seasons[3]}/>
                    </div>
                </section>
                <section className="seasons__season">
                    <h2 className="seasons__titleSeason">Season 5</h2>
                    <div className="seasons__content">
                        <SeasonContent data={this.state.seasons[4]}/>
                    </div>
                </section>
                <section className="seasons__season">
                    <h2 className="seasons__titleSeason">Season 6</h2>
                    <div className="seasons__content">
                        <SeasonContent data={this.state.seasons[5]}/>
                    </div>
                </section>
                <section className="seasons__season">
                    <h2 className="seasons__titleSeason">Season 7</h2>
                    <div className="seasons__content">
                        <SeasonContent data={this.state.seasons[6]}/>
                    </div>
                </section>
            </main>
        );
    }
}

export default Season;