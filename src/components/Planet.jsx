
const Planet = ({name, text, distance, time}) =>{
    return(
        <>
        <section className="planet">
        <h1>{name}</h1>
        <p>{text}</p>
        <hr/>
        <div className="planet details">
          <h5>Avg. distance</h5>
          <h6>{distance}</h6>
          <h5>Est. travel time</h5>
          <h6>{time}</h6>
        </div>
        </section>
        </>
    );
}
export default Planet