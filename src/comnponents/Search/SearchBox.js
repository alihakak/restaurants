import React from 'react';
import styled from "styled-components";

const SearchBoxContainer = styled.div`
width: 100%;
margin: auto 0;
clear:both;
float:left;
padding: 10px;

`;
const Input = styled.input`
padding: 10px;
font-size: 17px;
border: 1px solid grey;
float: left;
width: 70%;
background: #f1f1f1;
`;
const Button = styled.button`
float: left;
width: 20%;
padding: 10px;
background: #2196F3;
color: white;
font-size: 17px;
border: 1px solid grey;
border-left: none;
cursor: pointer;
`;
class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    enterPressed(event) {
        var code = event.keyCode || event.which;
        if(code === 13) {
            this.props.onSearchClick();
        } 
    }
    render() {
        const { searchText, onSearchClick, onChange, placeHolderText } = this.props
        return (
            <SearchBoxContainer>
            <Input
                ref={this.inputRef}
                placeholder={placeHolderText}
                onChange={onChange}
                onKeyPress={this.enterPressed.bind(this)}
            />
             <Button role="button" aria-pressed="false" onClick={onSearchClick} >{searchText}</Button>
            </SearchBoxContainer>
        );
    }
}
export default SearchBox; 