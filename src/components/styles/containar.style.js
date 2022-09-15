import styled from "styled-components";
export const Container =styled.div`
    width: 1000px;
    max-width: 100%;
    padding: 0 20;
    margin: 0 auto;
    background-color: #ebebeb;

`
export const HeaderStyle =styled.header`
    width: 1000px;
    max-width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    background: ${({theme})=>theme.colors.Header};

    &:hover{
        background-color: beige;
    }

`
