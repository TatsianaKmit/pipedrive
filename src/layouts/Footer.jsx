import React from 'react'

function Footer() {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <>
            <div className='footer__wrapper'>
                <h4>© {year}</h4>
            </div>
        </>
    )
}

export default Footer