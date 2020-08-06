import React, { Component } from 'react'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import ServiceComments from '../../components/ServiceComments/ServiceComments'
import './ServiceDetailPage.css'

class ServiceDetailPage extends Component {

    state = {
        service: this.props.location.state.service,
    }

    render() {
        return (
            <>
                <div className='post-detail'>
                    <ServiceCard
                        className="service-card"
                        key={this.state.service._id}
                        service={this.state.service}
                        user={this.props.user}
                        handleDeleteService={this.props.handleDeleteService}
                    />
                </div>
                <div className='break-container'>
                    <div className="break"></div>
                </div>
                <div className='title-container'>
                    <p className="comment-title">Comments ::</p>          
                </div>
                <ServiceComments
                    key={this.state.service._id}
                    service={this.state.service}
                    user={this.props.user}
                    handleChange={this.props.handleChange}
                    serviceComment={this.props.serviceComment}
                    handleAddServiceComment={this.props.handleAddServiceComment}
                    handleDeleteServiceComment={this.props.handleDeleteServiceComment}
                    handleGetAllServices={this.props.handleGetAllServices}
                />
            </>
        )
    }
}

export default ServiceDetailPage