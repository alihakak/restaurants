import React from 'react';
import styled from "styled-components";
import GridItem from '../GridItem/GridItem';
const GridContainer = styled.div`
margin: auto 0;

clear:both;
`;

const GridList = styled.ul`
padding: 5px;
max-width: 1024px;
@media (min-width: 600px) {
    display: grid;
    grid-template-columns: auto auto auto auto;  
    grid-gap: 20px; 
  }

`;
const Grid = ({ restaurants, filter }) => {

    let filteredRestaurants = restaurants;
    if(filter !== '*' && restaurants) {
         filteredRestaurants = restaurants.filter(item => {
            const query = filter.toLowerCase();
          
            return (
              item.name.toLowerCase().indexOf(query) >= 0 ||
              item.fullAddress.area.toLowerCase().indexOf(query) >= 0 || 
              item.fullAddress.address.toLowerCase().indexOf(query) >= 0 || 
              item.fullAddress.postalCode.toLowerCase().indexOf(query) >= 0
            )
          });
    }
    return (
        <GridContainer>
            <GridList>
                {
                    filteredRestaurants.map((item , i) => {
                        return <GridItem data={item} key={`'ri-'${i}`} tabindex={i}></GridItem>
                    })
                }
            </GridList>
        </GridContainer>
    )
}
export default Grid;