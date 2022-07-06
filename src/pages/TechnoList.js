export default function TechnoList(props){
    const { technos } = props;
    return(
        <div className="techno-list">
            <h1>All technos</h1>
            <div>
                {
                    technos.map(techno => (
                        <div key={techno.technoid}>
                            <h2>{techno.technoname}</h2>
                            <h3>{techno.technocategorie}</h3>
                            <p>{techno.technodescription}</p>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}