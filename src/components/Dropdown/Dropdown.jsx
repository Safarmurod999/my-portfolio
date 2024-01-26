import './Dropdown.scss'
function Dropdown({ array, open }) {
    return (
        <ul className={`dropdown ${open && 'open'}`}>
            {
                array.map((el, index) => (
                    <li className="dropdown-item" key={index}>{el}</li>
                ))
            }
        </ul>
    )
}

export default Dropdown