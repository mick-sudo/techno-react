import { useState } from "react";

export default function TechnoAdd(props) {
    const [techno, setTechno] = useState({
            technoname: '',
            technocategorie:'',
            technodescription:'',
        });
    
    
    const { handleAddTechno } = props;


    function handleSubmit(evt){
        evt.preventDefault();
        handleAddTechno(techno);
        setTechno({
            technoname: '',
            technocategorie:'',
            technodescription:'',
        })
    }

    function handleChange(evt){
        const{name, value} = evt.target;
        setTechno({...techno, [name]:value});
    }

    return(
        <div className="techno-add">
            <h1>Add techno</h1>
            <form onSubmit={(evt) => handleSubmit(evt)}>
            <label htmlFor="technoname">Name:</label>
                <br />
                <input type="text" name="technoname" id="technoname" value={techno.technoname} onChange={(evt) => handleChange(evt)}/>
                <br />
                <label htmlFor="technocategorie">Categorie</label>
                <br />
                <select name="technocategorie" id="technocategorie" value={techno.technocategorie} onChange={(evt) => handleChange(evt)}>
                    <option value="">Select a categorie</option>
                    <option value="front">Front</option>
                    <option value="back">back</option>
                    <option value="fullstack">Full Stack</option>
                    <option value="other">Other</option>
                </select>
                <br />
                <textarea
                name="technodescription"
                id="technodescription"
                cols="30"
                rows="10"
                value={techno.technodescription} onChange={(evt) => handleChange(evt)}
                 ></textarea>
                 <br />
                 <input type="submit" value="Add techno" className="btn"/>
            </form>
        </div>
    )
}