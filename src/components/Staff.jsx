const Staff = ({role, name, text}) =>{
    return(
        <>
        <section className="staff">
            <h6>{role}</h6>
            <h1>{name}</h1>
            <p>{text}</p>

        </section>
        </>
    );
}
export default Staff