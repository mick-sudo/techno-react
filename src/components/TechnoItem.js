export default function TechnoItem(props) {

    const {techno, handleDeleteTechno} = props;

    return(
        <div key={techno.technoid} className="card">
        <h1>{techno.technoname}</h1>
        <h2>Categorie</h2>
        <h4>{techno.technocategorie}</h4>
        <h2>Description</h2>
        <p>{techno.technodescription}</p>
        <button className="btn-delete" onClick={()=> handleDeleteTechno(techno.technoid)}>delete</button>
    </div>
    )
}