import React, { Component } from 'react'
import moment from 'moment'

class RequestComment extends Component {

    render() {

        const dateCreated = new Date(this.props.requestComment.createdAt)

        return (
            <div key={this.props.requestComment._id} className='r-comment-container'>
                <div className='group'>
                    <div className='comment-info'> 
                        <p className='comment-creator'>{this.props.requestComment.creator}</p>
                    </div>
                    <div className='comment-text mobile-erase'>
                        <p>{this.props.requestComment.text}</p>
                    </div>
                    {this.props.user._id === this.props.request.user || this.props.user._id === this.props.requestComment.user ?
                        <>
                            <p className='my-comment-date'>{moment(dateCreated.toLocaleString()).format('LL')}</p>
                            <button 
                                className='x-btn' 
                                id={this.props.request._id} 
                                name={this.props.requestComment._id} 
                                onClick={this.handleDeleteRequestComment}
                            > X
                            </button>
                        </>
                    :
                    <p className='comment-date'>{moment(dateCreated.toLocaleString()).format('LL')}</p>
                    }
                </div>
                <div className='comment-text norm-erase'>
                    <p>{this.props.requestComment.text}</p>
                </div>
            </div>
        )
    }
}

export default RequestComment