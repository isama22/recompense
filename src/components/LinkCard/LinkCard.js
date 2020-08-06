import React from 'react'
import { Link } from 'react-router-dom'
import '../../utils/userService'
import './LinkCard.css'
import moment from 'moment'

function LinkCard({ link, handleDeleteLink, user }) {
    user = user === null ? user = NaN : user

    const cities = link.cities ? link.cities.map((city, idx) =>
        <span key={city.value}>&nbsp;&nbsp;{idx !== 0 ? '•' : ''}&nbsp;&nbsp;{city.label}</span>) : <span></span>

    const dateCreated = new Date(link.createdAt)

    return (
        <>
            <div className='link-detail-card'>
                <div className='title-group'>
                    <p className='card-name'>{link.name}</p>
                    <div className='post-date'>posted on <span>{moment(dateCreated.toLocaleString()).format('LL')}</span></div>
                </div>
                <div className='card-info'>
                    <div>
                        <div className="line-item">
                            <span className='service-label'>City, State :: </span>
                            <span className='service-info' key={link.id}>{cities}</span>
                        </div>
                        <div className='line-item'>
                            <span className='service-label'>Pronouns :: </span>
                            <span className='service-info' key={link.id}>{link.pronouns}</span>
                        </div>
                        <div className='line-item'>
                            <span className='service-label'>About :: </span>
                            <span className='service-info about' key={link.id}>{link.description}</span>
                        </div>
                        {link.venmo ? 
                        <div className='line-item'>
                            <span className='service-label'>Venmo :: </span>
                            <span className='service-info' key={link.id}>{link.venmo}</span>
                        </div>      : <div></div>}
                        {link.cashapp ? 
                        <div className='line-item'>
                            <span className='service-label'>CashApp :: </span>
                            <span className='service-info' key={link.id}>{link.cashapp}</span>
                        </div>        : <div></div>}
                        {link.paypal ? 
                            <div className='line-item'>
                                <span className='service-label'>PayPal :: </span>
                                <span className='service-info' key={link.id}>{link.paypal}</span>
                            </div>       
                            : 
                            <div></div>
                        }
                        {user._id && link.contactEmail ?
                            <div className='line-item'>
                                <span className='service-label'>Contact Email:: </span>
                                <span className='service-info' key={link.id}>{link.creator} at {link.contactEmail}</span>
                            </div>
                        : <div></div>} 
                    </div>
                    <div className='card-links'>
                        {user._id === link.user &&
                            <button
                                className='delete'
                                onClick={() => handleDeleteLink(link._id)}
                            >
                                remove
                            </button>
                        }
                        <Link
                            className='home-link'
                            to='/directaidlinks'
                        >
                            Return to Aid Link Floor
                        </Link>
                        {user._id === link.user &&
                            <Link
                                className='edit'
                                to={{
                                    pathname: '/editlink',
                                    state: { link },
                                }}>Edit
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default LinkCard