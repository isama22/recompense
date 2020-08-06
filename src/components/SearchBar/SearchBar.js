import React, { Component } from 'react'
import Select from 'react-select'
import './SearchBar.css'

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#3c0c15' : '#e3dbc9',
    color: state.isSelected ? 'white' : '#3c0c15',
  }),
  control: () => ({
    width: 120,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

class SearchBar extends Component {

    state = {
        formData: {
            city: '',
            category: ''
        }
    }
    
    handleChangeCity = city => {
        this.setState({ formData: { ...this.state.formData, city } })
    }

    handleChangeCategory = category => {
        this.setState({ formData: { ...this.state.formData, category } })
    }

    handleRefreshPage = () => {
        window.location.reload(false)
    }

    componentDidUpdate() {
        if (this.props.onChange) {
            this.props.onChange(this.state)
        }
    }

    render() {
        return (
            <>
                <div className='search-button'>
                    <button
                        className="refresh-btn web-erase"
                        type="submit"
                        name='refresh'
                        onClick={this.handleRefreshPage}
                    >
                        Reset Search Filters
                    </button>
                </div>
                <div className="search-bar">
                    <div className='search-item search-location'>
                        <label className='search-label'>Search by Location :: </label>
                        <div className='search-row'>
                            <Select
                                className='search-select'
                                value={this.state.formData.city}
                                styles={customStyles}
                                onChange={this.handleChangeCity}
                                options={this.props.cities}
                                required
                            />
                            <button
                                className="search-btn"
                                type="submit"
                                name={this.state.formData.city}
                                onClick={(e) => this.props.handleSearchCities(e, this.state.formData.city)}
                            >
                                →
                            </button>
                        </div>
                    </div>
                    <div className='search-item search-category'>
                        <label className='search-label'>or by Category :: </label>
                        <div className='search-row'>
                            <Select
                                className='search-select'
                                value={this.state.formData.category}
                                styles={customStyles}
                                onChange={this.handleChangeCategory}
                                options={this.props.categories}
                                required
                            />
                            <button
                                className="search-btn"
                                type="submit"
                                name={this.state.formData.category}
                                onClick={(e) => this.props.handleSearchCategories(e, this.state.formData.category)}
                            >
                                →
                            </button>
                        </div>
                    </div>
                    <button
                        className="refresh-btn mobile-erase"
                        type="submit"
                        name='refresh'
                        onClick={this.handleRefreshPage}
                    >
                        Reset Search Filters
                    </button>
                </div>
            </>
          )
    }
}

export default SearchBar