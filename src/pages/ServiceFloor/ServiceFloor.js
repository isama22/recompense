import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as servicesAPI from '../../services/services-api'
import ServiceFloorItems from '../../components/ServiceFloorItems/ServiceFloorItems'
import SearchBar from '../../components/SearchBar/SearchBar'
import './ServiceFloor.css'

class ServiceFloor extends Component {

  state = {
    services: []
  }

  handleSearchCities = async (e, city) => {
    e.preventDefault()
    const services = this.props.services.filter(service => {
      if (service.cities[0].value.includes(city.value)) {
        return service.cities
      }
    })
    this.setState({services:services})
  }
  
  handleSearchCategories = async (e, category) => {
    e.preventDefault()
    const services = this.props.services.filter(service => {
      if (service.categories[0].value.includes(category.value)) {
        return service.categories
      }
    })
    this.setState({services:services})
  }

  handleServiceComponent() {
    if (this.state.filteredServices.length === 0) {
      return this.props.services
    } else {
      return this.state.filteredServices
    }
  }

  async componentDidMount() {
    const services = await servicesAPI.getAll()
    this.setState({services})
  }
  
  render()  {
    return (
      <div className="service-page">
        <div className="page-header">
          <p className='page-title'>Services for BIPOC <span className='mobile-erase'>::</span></p> 
          <div className='top-group'>
            <p className='justify'>This is a place for non-black people to post free and discounted services and offerings for black and indigenous people in their communities. Please be mindful of others in this space and put your heart forward.</p> 
          </div>
          <div className='post-button'>
            <Link className="add-service" to="/addservice">Post a new Service</Link>
          </div>
          <SearchBar
            cities={this.props.cities}
            categories={this.props.categories}
            handleSearchCities={this.handleSearchCities}
            handleSearchCategories={this.handleSearchCategories}
          />
        </div>
        <div className="page-content"> 
          <ServiceFloorItems
              services={this.state.services}
              cities={this.props.cities}
              categories={this.props.categories}
          />
        </div>
      </div>
    )
  }
}

export default ServiceFloor