import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import { getRestaurants, getRestaurantsPending, getRestaurantsError } from '../../reducers';
import { fetchRestaurantsByCity } from '../../api/ApiUtils'
import Grid from '../Grid/Grid';
import SearchBox from '../Search/SearchBox';
const BodyContainer = styled.div`
width: 100%;
margin: 0 auto;
max-width: 1024px;
`;
class RestaurantsList extends Component {
    constructor(props) {
        super(props);
        this.setCity = this.setCity.bind(this);
        this.setFilter = this.setFilter.bind(this);
        this.state = { city: 'Toronto' }
        this.state = { filterVal: '*' }
    }
    setCity(evt) {
        this.setState({ city: evt.target.value });
    }

    setFilter(evt) {
        this.setState({ filterVal: evt.target.value })
    }

    refineSearch(listByCity) {
        const filteredRestaurants = listByCity.filter(item => {
            const query = this.state.filterVal.toLowerCase();

            return (
                item.name.toLowerCase().indexOf(query) >= 0 ||
                item.fullAddress.area.toLowerCase().indexOf(query) >= 0 ||
                item.fullAddress.address.toLowerCase().indexOf(query) >= 0
            )
        });
        return filteredRestaurants;
    }
    async componentDidMount() {
        const { fetchRestaurants } = this.props;
        if (fetchRestaurants) {
            await fetchRestaurants(this.state.city);
        }
    }
    render() {
        const { restaurants, error, pending, fetchRestaurants } = this.props;
        let listByCity = restaurants;

        return (
            <BodyContainer>
                {error && <span className='product-list-error'>{error}</span>}
                <SearchBox searchText="Search" placeHolderText="Enter city" id='search'
                    onChange={this.setCity}
                    onSearchClick={() => fetchRestaurants(this.state.city)}>
                </SearchBox>
                <SearchBox searchText="Filter" placeHolderText="Enter name/street/area to filter" id='filter'
                    onChange={this.setFilter}
                    onSearchClick={() => {
                        this.refineSearch(listByCity)
                    }}>
                </SearchBox>
                <Grid restaurants={restaurants} filter={this.state.filterVal} />
            </BodyContainer>
        )
    }
}


const mapStateToProps = state => ({
    error: getRestaurantsError(state),
    restaurants: getRestaurants(state),
    pending: getRestaurantsPending(state)
})

const mapDispatchToProps = (dispatch) => {
    return { fetchRestaurants: async (city) => fetchRestaurantsByCity(dispatch, city) }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RestaurantsList);
