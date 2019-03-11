import React from 'react';
import PropTypes from 'prop-types'; 

const Header = (props) => {
    return (
        <div>
            <nav>
                <div className="naw-wrapper light-blue darken-2">
                    <a href ="www.google.com" className="brand-logo">{ props.titulo }</a>
                </div>
            </nav>
        </div>
    )
};

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
export default Header;
