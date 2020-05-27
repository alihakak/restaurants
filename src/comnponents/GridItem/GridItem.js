import React from 'react';
import styled from "styled-components";


const GridItemFrame = styled.li`
display:flex;
flex-direction:column;
item-align:center;
padding: 20px 0;
font-size: 30px;
list-style:none;
grid-column: span 1;
grid-row: span 2;
`;

const Image = styled.img`
object-fit: cover; 
`;
const Title = styled.h5`
color: rgb(76, 187, 23);
text-align: center;
padding : 2px;
margin: 0;
font-size: 18px;
height: 50px;
`;
const Address = styled.address`
font-size: 14px;
color:grey
text-align: left;
margin:0;
padding: 5px;
`;
const Phone = styled.a`
color: purple;
font-size: 14px;
text-decoration:none;
padding : 3px;
`;
const ItemLabel = styled.span`
font-size: 14px;
color: grey;
text-decoration:none;
padding : 3px;
`;
const ItemWithLabelInline = styled.div`
display:flex;
flex-direction:row;

`;

const GritItem = ({ data }) => {
    return (
        <>
            <GridItemFrame>
                <Title>
                    {data.name}
                </Title>
                <Image src={data.imageUrl} alt={data.name} role="img"/>
                <Address>
                    {data.fullAddress.address}
                </Address>
                <Address>
                    {`${data.fullAddress.city}, ${data.fullAddress.state} - ${data.fullAddress.postalCode} `}
                </Address>
                <ItemWithLabelInline>
                    <ItemLabel> Tel: </ItemLabel>
                    <Phone href={`tel:${data.phone}`}>
                        {data.phone}
                    </Phone>
                </ItemWithLabelInline>
            </GridItemFrame>
        </>
    )
}
export default GritItem;