import SeasonContent from "../SeasonContent/SeasonContent";
import "./season.css";

import React from "react";
class Season extends React.Component{
    // Example state structure - single season will be passed to another component which will create the appropriate content
    state = {
        seasons: [
            {
                id:0,
                // episodeID 1-1 means 1st season and 1st episode, 1-2 means 1st season and 2nd episode etc 
                titles:[{title: "Take Your Little Gun and Get Out of My Trailer Park", episodeID:"1-1", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/Ncp22aLT"}, {title: "Fuck Community College, Let's Get Drunk and Eat Chicken Fingers", episodeID:"1-2", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/Ncp22aLT"}, {title: "Mr. Lahey's Got My Porno Tape!", episodeID:"1-3", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/Ncp22aLT"}, {title: "Mrs. Peterson's Dog Gets Fucked Up", episodeID:"1-4", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/Ncp22aLT"}, {title: "I'm Not Gay, I Love Lucy... Wait a Second, Maybe I am Gay", episodeID:"1-5", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/Ncp22aLT"}, {title: "Who The Hell Invited These Idiots To My Wedding?", episodeID:"1-6", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/Ncp22aLT"}],
            },
            {
                id:1,
                titles:[{title: "What in the Fuck Happened to Our Trailer Park?", episodeID:"2-1", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/VYQAjK5I"}, {title: "Jim Lahey Is a Drunk Bastard", episodeID:"2-2", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/VYQAjK5I"}, {title: "I've Met Cats & Dogs Smarter Than Trevor & Cory!", episodeID:"2-3", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/VYQAjK5I"}, {title: "A Dope Trailer Is No Place for a Kitty!", episodeID:"2-4", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/VYQAjK5I"}, {title: "The Bible Pimp", episodeID:"2-5", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/VYQAjK5I"}, {title: "Never Trust a Man with No Shirt On", episodeID:"2-6", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/VYQAjK5I"}, {title: "The Bare Pimp Project", episodeID:"2-7", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/VYQAjK5I"}],
            },
            {
                id:2,
                titles:[{title: "The Kiss of Freedom", episodeID:"3-1", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/oIA22CwJ"}, {title: "Temporary Relief Assistant Trailer Park Supervisor", episodeID:"3-2", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/oIA22CwJ"}, {title: "If I Can't Smoke & Swear, I'm Fucked", episodeID:"3-3", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/oIA22CwJ"}, {title: "Who's the Microphone Assassin?", episodeID:"3-4", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/oIA22CwJ"}, {title: "Closer to the Heart", episodeID:"3-5", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/oIA22CwJ"}, {title: "Where in the Fuck Is Randy's Barbeque?", episodeID:"3-6", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/oIA22CwJ"}, {title: "The Delusions of Officer Jim Lahey", episodeID:"3-7", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/oIA22CwJ"}, {title: "A Shit Leopard Can't Change its Spots", episodeID:"3-8", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/oIA22CwJ"}],
            },
            {
                id:3, 
                titles:[{title: "Never Cry Shitwolf", episodeID:"4-1", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/IQRmEAaT"}, {title: "A Man's Gotta Eat", episodeID:"4-2", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/IQRmEAaT"}, {title: "Rub 'n Tiz'zug", episodeID:"4-3", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/IQRmEAaT"}, {title: "The Green Bastard", episodeID:"4-4", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/IQRmEAaT"}, {title: "Conky", episodeID:"4-5", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/IQRmEAaT"}, {title: "If You Love Something, Set it Free", episodeID:"4-6", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/IQRmEAaT"}, {title: "Propane, Propane", episodeID:"4-7", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/IQRmEAaT"}, {title: "Working Man", episodeID:"4-8", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/IQRmEAaT"}],
            },
            {
                id:4,
                titles:[{title: "Give Peace a Chance", episodeID:"5-1", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/YUxEQa4Y"}, {title: "The Shit Puppets", episodeID:"5-2", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/YUxEQa4Y"}, {title: "The Fuckin' Way She Goes", episodeID:"5-3", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/YUxEQa4Y"}, {title: "You Got to Blame the Thing Up Here", episodeID:"5-4", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/YUxEQa4Y"}, {title: "Jim Lahey Is a Fuckin' Drunk and He Always Will Be", episodeID:"5-5", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/YUxEQa4Y"}, {title: "Don't Cross the Shitline", episodeID:"5-6", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/YUxEQa4Y"}, {title: "The Winds of Shit", episodeID:"5-7", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/YUxEQa4Y"}, {title: "Dressed All Over & Zesty Mordant", episodeID:"5-8", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/YUxEQa4Y"}, {title: "I am the Liquor", episodeID:"5-9", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/YUxEQa4Y"},{title: "Shit Blizzard", episodeID:"5-10", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/YUxEQa4Y"}],
            },
            {
                id:5,
                titles:[{title: "Way of the Road", episodeID:"6-1", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/ARoi0YYD"}, {title: "The Cheeseburger Picnic", episodeID:"6-2", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/ARoi0YYD"}, {title: "High Definition Piss Jugs", episodeID:"6-3", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/ARoi0YYD"}, {title: "Where in the Fuck Is Oscar Goldman?", episodeID:"6-4", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/ARoi0YYD"}, {title: "Halloween 1977", episodeID:"6-5", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/ARoi0YYD"}, {title: "Gimme My Fucking Money or Randy's Dead", episodeID:"6-6", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/ARoi0YYD"}],
            },
            {
                id:6,
                titles:[{title: "I Fuckin' Miss Cory and Trevor", episodeID:"7-1", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/0EYxwazD"}, {title: "I Banged Lucy and Knocked Her Up...No Big Deal", episodeID:"7-2", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/0EYxwazD"}, {title: "Three Good Men are Dead", episodeID:"7-3", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/0EYxwazD"}, {title: "Friends of the Road", episodeID:"7-4", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/0EYxwazD"}, {title: "The Mustard Tiger", episodeID:"7-5", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/0EYxwazD"}, {title: "We Can't Call People Without Wings Angels So We Call Them Friends", episodeID:"7-6", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/0EYxwazD"}, {title: "Jump the Cheeseburger", episodeID:"7-7", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/0EYxwazD"}, {title: "Let the Liquor Do the Thinking", episodeID:"7-8", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/0EYxwazD"}, {title: "Going Off the Rails On the Swayzie Train", episodeID:"7-9", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/0EYxwazD"}, {title: "A Shit River Runs Through It", episodeID:"7-10", hidden: false, linkToEpisode: "https://mega.nz/folder/RNwXjKZQ#fZc25VWEDe1DxsQbVYgArg/folder/0EYxwazD"}],
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