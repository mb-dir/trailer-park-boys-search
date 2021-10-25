import React from "react";
import "./seasonContent.css";

const SeasonContent = (props)=>{
    const seasonContent = props.data.titles.map((el)=>{
        let className;
        el.hidden ? className = "season__episode season__episode--hidden episode" : className = "season__episode episode";
        console.log(className)
        return(
            <div className={className} key={el.episodeID}>
                <h3 className="episode__title" >{el.title}</h3>
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