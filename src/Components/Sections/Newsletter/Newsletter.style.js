import styled from "styled-components";
import newsletterbg from "../../../Images/newsletterbg.jpg"
export const NewsletterStyle = styled.article`
background-image: url('${newsletterbg}');
background-size: cover;
height: 20rem;
display: grid;
justify-content: center;
grid-template-rows: 20% 30%;
color: white;
padding-top: 5rem;
font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
h2{
    font-size: 2rem;
    font-family: 'lobster';
    font-weight: 400;
}
div input{
    width: 30rem;
    padding: 0.5rem;
}
div button{
    background-color: gray;
    border: none;
    padding: 0.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    color: white;
    text-transform: uppercase;
}
`