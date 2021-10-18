import React from "react";

const SeasonContent = (props)=>{
    console.log(props.data)
    const seasonContent = props.data.titles.map((el)=>{
        return(
            <div>
                <h2>{el}</h2>
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