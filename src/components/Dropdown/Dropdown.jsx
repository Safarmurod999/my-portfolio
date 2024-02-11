import { Link } from 'react-router-dom'
import './Dropdown.scss'

const Dropdown = ({ array, open }) => {
    return (
        <ul className={`dropdown ${open && 'open'}`}>
            {
                array.map((el, index) => (
                    <li className="dropdown-item" key={index}><Link to={el.link}>{el.name}</Link></li>
                ))
            }
        </ul>
    )
}

export default Dropdown