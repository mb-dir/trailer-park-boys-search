import React from "react";
import "./seasonContent.css";

const SeasonContent = (props)=>{
    const seasonContent = props.data.titles.map((el)=>{
        let className;
        el.hidden ? className = "season__episode season__episode--hidden episode" : className = "season__episode episode";
        return(
            <div className={className} key={el.episodeID}>
                <a className="episode__title" href="google.com">{el.title}</a>
            </div>
        );
    });
    return(
        <React.Fragment>
            {seasonContent}
        </React.Fragment>
    );
}
export default SeasonContent