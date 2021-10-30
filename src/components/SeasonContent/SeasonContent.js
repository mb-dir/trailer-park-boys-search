import React from "react";
import "./seasonContent.css";

const SeasonContent = (props)=>{
    const seasonContent = props.data.titles.map((el)=>{
        let className;
        el.hidden ? className = "season__episode season__episode--hidden episode" : className = "season__episode episode";
        return(
            <a key={el.episodeID} className="episode__titleContainer" target="_blank" rel="noreferrer" href={el.linkToEpisode}>
                <div className={className}>
                    <h3 className="episode__title">{el.title}</h3>
                    <img className="episode__thumbnail" src={`${el.thumbnail}`} alt="episode thumbnail"/>
                </div>
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