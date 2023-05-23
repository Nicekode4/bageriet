import styled from "styled-components";

export const ValuesStyle = styled.article`
color: #272C31;
text-align: center;
font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
h2{
    font-family: 'Lobster';
    margin-top: 5rem;
}
h5{
    text-transform: uppercase;
}
p{
    color: gray;
}
.cardContainer{
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
img{
    height: 10rem;
    border-radius: 10rem;
}

`