import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'

class AddRequestPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      categories: '',
      description: '',
      exchange: '',
      city: '',
      contactEmail: ''
    }
  }

  formRef = React.createRef()

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleAddRequest(this.state.formData)
  }

  handleChange = e => {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value, }
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    })
  }

  handleChangeCategories = categories => {
    this.setState({ formData: { ...this.state.formData, categories } })
  }

  handleChangeCities = cities => {
    this.setState({ formData: { ...this.state.formData, cities } })
  }

  render() {
    return (
      <div className="add-service-page">
        <div className="page-header">
          <p className='page-title'>Add a Request :: </p>
        </div>
        <div className='add-service-form'>
          <form 
            ref={this.formRef} 
            autoComplete="off" 
            onSubmit={this.handleSubmit}
          >
            <div className='form-item'>
              <label className='service-label'>Request Title :: </label>
              <input
                className="service-form"
                name="name"
                value={this.state.formData.name}
                onChange={this.handleChange}
                required
              /> 
            </div>
            <div className='form-item'>
              <label className='service-label'>Description of Request :: </label>
              <textarea 
                className="service-form description"
                name="description"
                value={this.state.formData.description}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className='form-item'>
              <label className='service-label'>Exchange for Request :: </label>
              <input 
                className="service-form"
                name="exchange"
                value={this.state.formData.exchange}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className='form-item'>
              <label className='service-label'>Location :: </label>
              <Select
                className='service-categories'
                value={this.state.formData.cities}
                name="cities"
                onChange={this.handleChangeCities}
                options={this.props.cities}
                // required
              />
            </div>
            <div className='form-item'>
              <label className='service-label'>Categories of Request :: </label>
              <Select
                className='service-categories'
                value={this.state.formData.categories}
                name="categories"
                onChange={this.handleChangeCategories}
                options={this.props.categories}
                // required
              />
            </div>
            <div className='form-item'>
              <label className='service-label'>Contact Email :: </label>
              <input 
                className="service-form"
                name="contactEmail"
                value={this.state.formData.contactEmail}
                onChange={this.handleChange}
                // required
              />
            </div>
            <div className='add-links'>
                <Link className='cancel-button' to='/requests'>Cancel</Link>
                <button
                    className="btn"
                    type="submit"
                    disabled={this.state.invalidForm}
                >
                    Add Request
                </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddRequestPage