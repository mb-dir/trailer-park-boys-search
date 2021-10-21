import SeasonContent from "../SeasonContent/SeasonContent";
import "./season.css";

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
                titles:["title 1 season 7", "title 2 season 1", "title 3 season 1", "title 4 season 1", "title 5 season 7",],
            },

        ],
    }
    render(){
        return(
            <main className="seasons">
                <form>
                    <label htmlFor="searcher">Search season</label>
                    <input type="text" id="searcher"/>
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