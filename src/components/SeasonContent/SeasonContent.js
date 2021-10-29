import React from "react";
import "./seasonContent.css";

const SeasonContent = (props)=>{
    const seasonContent = props.data.titles.map((el)=>{
        let className;
        el.hidden ? className = "season__episode season__episode--hidden episode" : className = "season__episode episode";
        return(
            <a className="episode__title" target="_blank" href={el.linkToEpisode}>
                <div className={className} key={el.episodeID}>{el.title}</div>
            </a>
        );
    });
    return(
        <React.Fragment>
            {seasonContent}
        </React.Fragment>
    );
}
export default SeasonContent