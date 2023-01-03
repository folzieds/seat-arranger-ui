import PropTypes from "prop-types";
const Header = ({ title }) => {
    return (
     <header className='header'>
         im
         <h1>{title}</h1>
     </header>
    )
}


Header.defaultProps = {
    title: 'Seat Arranger',
}

Header.protoTypes = {
    title: PropTypes.string.isRequired,
}


export default Header;