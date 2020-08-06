import React, { Component } from 'react'
import moment from 'moment'

class LinkComment extends Component {

    render() {

        const dateCreated = new Date(this.props.linkComment.createdAt)

        return (
            <div key={this.props.linkComment._id} className='l-comment-container'>
                <div className='group'>
                    <div className='comment-info'> 
                        <p className='comment-creator'>{this.props.linkComment.creator}</p>
                    </div>
                    <div className='comment-text mobile-erase'>
                        <p>{this.props.linkComment.text}</p>
                    </div>
                    {this.props.user._id === this.props.link.user || this.props.user._id === this.props.linkComment.user ?
                        <>
                            <p className='my-comment-date'>{moment(dateCreated.toLocaleString()).format('LL')}</p>
                            <button 
                                className='x-btn' 
                                id={this.props.link._id} 
                                name={this.props.linkComment._id} 
                                onClick={this.handleDeleteLinkComment}
                            > X
                            </button>
                        </>
                    :
                    <p className='comment-date'>{moment(dateCreated.toLocaleString()).format('LL')}</p>
                    }
                </div>
                <div className='comment-text norm-erase'>
                    <p>{this.props.linkComment.text}</p>
                </div>
            </div>
        )
    }
}

export default LinkComment