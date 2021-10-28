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
                titles:[{title: "Take Your Little Gun and Get Out of My Trailer Park", episodeID:11, hidden: false}, {title: "Fuck Community College, Let's Get Drunk and Eat Chicken Fingers", episodeID:12, hidden: false}, {title: "Mr. Lahey's Got My Porno Tape!", episodeID:13, hidden: false}, {title: "Mrs. Peterson's Dog Gets Fucked Up", episodeID:14, hidden: false}, {title: "I'm Not Gay, I Love Lucy... Wait a Second, Maybe I am Gay", episodeID:15, hidden: false}, {title: "Who The Hell Invited These Idiots To My Wedding?", episodeID:16, hidden: false}],
            },
            {
                id:1,
                titles:[{title: "What in the Fuck Happened to Our Trailer Park?", episodeID:21, hidden: false}, {title: "Jim Lahey Is a Drunk Bastard", episodeID:22, hidden: false}, {title: "I've Met Cats & Dogs Smarter Than Trevor & Cory!", episodeID:23, hidden: false}, {title: "A Dope Trailer Is No Place for a Kitty!", episodeID:24, hidden: false}, {title: "The Bible Pimp", episodeID:25, hidden: false}, {title: "Never Trust a Man with No Shirt On", episodeID:26, hidden: false}, {title: "The Bare Pimp Project", episodeID:27, hidden: false}],
            },
            {
                id:2,
                titles:[{title: "The Kiss of Freedom", episodeID:31, hidden: false}, {title: "Temporary Relief Assistant Trailer Park Supervisor", episodeID:32, hidden: false}, {title: "If I Can't Smoke & Swear, I'm Fucked", episodeID:33, hidden: false}, {title: "Who's the Microphone Assassin?", episodeID:34, hidden: false}, {title: "Closer to the Heart", episodeID:35, hidden: false}, {title: "Where in the Fuck Is Randy's Barbeque?", episodeID:36, hidden: false}, {title: "The Delusions of Officer Jim Lahey", episodeID:37, hidden: false}, {title: "A Shit Leopard Can't Change its Spots", episodeID:38, hidden: false}],
            },
            {
                id:3, 
                titles:[{title: "Never Cry Shitwolf", episodeID:41, hidden: false}, {title: "A Man's Gotta Eat", episodeID:42, hidden: false}, {title: "Rub 'n Tiz'zug", episodeID:43, hidden: false}, {title: "The Green Bastard", episodeID:44, hidden: false}, {title: "Conky", episodeID:45, hidden: false}, {title: "If You Love Something, Set it Free", episodeID:46, hidden: false}, {title: "Propane, Propane", episodeID:47, hidden: false}, {title: "Working Man", episodeID:48, hidden: false}],
            },
            {
                id:4,
                titles:[{title: "Give Peace a Chance", episodeID:51, hidden: false}, {title: "The Shit Puppets", episodeID:52, hidden: false}, {title: "The Fuckin' Way She Goes", episodeID:53, hidden: false}, {title: "You Got to Blame the Thing Up Here", episodeID:54, hidden: false}, {title: "Jim Lahey Is a Fuckin' Drunk and He Always Will Be", episodeID:55, hidden: false}, {title: "Don't Cross the Shitline", episodeID:56, hidden: false}, {title: "The Winds of Shit", episodeID:57, hidden: false}, {title: "Dressed All Over & Zesty Mordant", episodeID:58, hidden: false}, {title: "I am the Liquor", episodeID:59, hidden: false},{title: "Shit Blizzard", episodeID:59, hidden: false}],
                // You have to repair the bug with episodeID 60(calculations forelIndex, whichSeason in inputHander)
            },
            {
                id:5,
                titles:[{title: "Way of the Road", episodeID:61, hidden: false}, {title: "The Cheeseburger Picnic", episodeID:62, hidden: false}, {title: "High Definition Piss Jugs", episodeID:63, hidden: false}, {title: "Where in the Fuck Is Oscar Goldman?", episodeID:64, hidden: false}, {title: "Halloween 1977", episodeID:65, hidden: false}, {title: "Gimme My Fucking Money or Randy's Dead", episodeID:66, hidden: false}],
            },
            {
                id:6,
                titles:[{title: "I Fuckin' Miss Cory and Trevor", episodeID:71, hidden: false}, {title: "I Banged Lucy and Knocked Her Up...No Big Deal", episodeID:72, hidden: false}, {title: "Three Good Men are Dead", episodeID:73, hidden: false}, {title: "Friends of the Road", episodeID:74, hidden: false}, {title: "The Mustard Tiger", episodeID:75, hidden: false}, {title: "We Can't Call People Without Wings Angels So We Call Them Friends", episodeID:76, hidden: false}, {title: "Jump the Cheeseburger", episodeID:77, hidden: false}, {title: "Let the Liquor Do the Thinking", episodeID:78, hidden: false}, {title: "Going Off the Rails On the Swayzie Train", episodeID:79, hidden: false}, {title: "A Shit River Runs Through It", episodeID:79, hidden: false}],
                // You have to repair the bug with episodeID 80(calculations forelIndex, whichSeason in inputHander)
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