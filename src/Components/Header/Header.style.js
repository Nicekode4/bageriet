import styled from "styled-components";


export const HeaderStyle = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
div{
 display: grid;
grid-template-columns: 5% 5% 20% 5% 5%;   
justify-content: center;
}
a{
    margin-top: 5rem;
    color: #B0C6D4;
    text-decoration: none;

}
h1{
    font-family: 'Lobster', cursive;
    font-weight: 400;
    font-size: 5rem;
    margin: 3rem;
    margin-top: 2rem;
    color: white;

}
.active{
    color: white;
}

//background-color: #B0C6D4;
height: fit-content;
text-align: center;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`