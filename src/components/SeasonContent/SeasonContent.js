import React from "react";

const SeasonContent = (props)=>{
    const seasonContent = props.data.map((el)=>{
        return(
            <React.Fragment>
                <section>
                    <h2>{el.titles}</h2>
                </section>
            </React.Fragment>
        );
    });
    return(
        <div>{seasonContent}</div>
    );
}
export default SeasonContent