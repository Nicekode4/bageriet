import styled from "styled-components";

export const BreadsStyle = styled.article`
text-align: center;
margin-right: 5rem;
margin-left: 5rem;
margin-top: 5rem;
h2{
    font-family: 'lobster';
    font-weight: 400;
    margin-bottom: 2rem;
}
p{
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom: 10rem;
    color: gray;
}
h5{
    height: 2rem;
    overflow: hidden;
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    color: gray;
    margin-bottom: 1rem;

}
h4{
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    color: gray;
    margin-bottom: 1rem;
    margin-top: 1rem;

}
span{
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    color: gray;
    margin-bottom: 1rem;
}
img{
    height: 10rem;
    margin-bottom: 1rem;

}
.breadSelection{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
`