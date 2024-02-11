import './PrimaryBtn.scss'

const PrimaryBtn = ({ text, link ,ariaLabel}) => {
    return (
        <div className='primary-btn'>
            <a href={link} aria-label={ariaLabel}>
                {text}
            </a>
        </div>
    )
}

export default PrimaryBtn