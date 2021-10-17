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
        <div>{seasonContent}</div>
    );
}
export default SeasonContent