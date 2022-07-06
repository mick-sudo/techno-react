import { NavLink } from 'react-router-dom'
export default function Menu() {
    return(
        <div className="menu">
            <ul>
                <li><NavLink to="/" className={({ isActive }) => (isActive ? "activelink" : undefined)}>Home</NavLink></li>
                <li><NavLink to="/add" className={({ isActive }) => (isActive ? "activelink" : undefined)}>Add techno</NavLink></li>
                <li><NavLink to="/list" className={({ isActive }) => (isActive ? "activelink" : undefined)}>All techno</NavLink></li>
            </ul>
        </div>
    )
} 