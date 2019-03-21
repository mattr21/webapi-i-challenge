import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    border: 1px solid grey;
    border-radius: 5px;
    margin-top: 10px;
    width: 300px;
    margin: 10px auto 0 auto;

    ${'' /* button {
        border: 1px solid grey;
        padding-right: 14px;
        background-color: white;
        color: red;
        cursor: pointer;
        height: 20px;
        width: 20px;
        border-radius: 5px; 
        &:hover {
            background-color: red;
            color: white;
        }
    } */}

    p {
        text-align: left;
        margin: 0 0 15px 15px;
    }
`;

const DeleteBtn = styled.button`
    border: 1px solid grey;
    padding-right: 14px;
    background-color: white;
    color: red;
    cursor: pointer;
    height: 20px;
    width: 20px;
    border-radius: 5px; 
    &:hover {
        background-color: red;
        color: white;
    }
`;

const User = props => {
    return (
        <WrapperDiv>
            <DeleteBtn> X </DeleteBtn>
            <p><strong>Name: </strong>{props.user.name}</p>
            <p><strong>Bio: </strong>{props.user.bio}</p>
            <button> Update </button>
        </WrapperDiv>
    )
}

export default User;