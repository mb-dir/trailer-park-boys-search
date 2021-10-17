import React from "react";

const SeasonContent = (props)=>{
    const seasonContent = props.data.map((el)=>{
        return(
            <section>
                <h2>{el.titles}</h2>
            </section>
        );
    });
    return(
        <React.Fragment>
            {seasonContent}
        </React.Fragment>
    );
}
export default SeasonContent