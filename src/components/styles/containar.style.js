import styled from "styled-components";
export const Container =styled.div`
    width: 1000px;
    max-width: 100%;
    padding: 0 20;
    margin: 0 auto;
   

`
export const HeaderStyle =styled.header`
   
    padding: 40px 0;
    margin: 0 auto;
    background: ${({theme})=>theme.colors.Header};

    &:hover{
        background-color: beige;
    }

`
export const Nav =styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 0px;
@media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`
export const Logo = styled.img`

height: auto;
width: auto;
@media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
}
`
export const Image = styled.img`

width: 375px;
  margin-left: 40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }

`
