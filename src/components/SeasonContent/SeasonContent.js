import React from "react";

const SeasonContent = (props)=>{
    const seasonContent = props.data.titles.map((el)=>{
        return(
            <div className="season__episode episode">
                <h2 className="episode__title">{el}</h2>
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