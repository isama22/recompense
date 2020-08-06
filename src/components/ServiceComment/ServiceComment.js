import React, { Component } from 'react'
import moment from 'moment'

class ServiceComment extends Component {

    render() {

        const dateCreated = new Date(this.props.serviceComment.createdAt)

        return (
            <div key={this.props.serviceComment._id} className='s-comment-container'>
                <div className='group'>
                    <div className='comment-info'> 
                        <p className='comment-creator'>{this.props.serviceComment.creator}</p>
                    </div>
                    <div className='comment-text mobile-erase'>
                        <p>{this.props.serviceComment.text}</p>
                    </div>
                    {this.props.user._id === this.props.service.user || this.props.user._id === this.props.serviceComment.user ?
                        <>
                            <p className='my-comment-date'>{moment(dateCreated.toLocaleString()).format('LL')}</p>
                            <button 
                                className='x-btn' 
                                id={this.props.service._id} 
                                name={this.props.serviceComment._id} 
                                onClick={this.handleDeleteServiceComment}
                            > X
                            </button>
                        </>
                    :
                    <p className='comment-date'>{moment(dateCreated.toLocaleString()).format('LL')}</p>
                    }
                </div>
                <div className='comment-text norm-erase'>
                    <p>{this.props.serviceComment.text}</p>
                </div>
            </div>
        )
    }
}

export default ServiceComment