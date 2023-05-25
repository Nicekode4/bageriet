import styled from "styled-components";
import bgImg from "../../Images/slide1.jpg"
export const ProductsStyle = styled.article`
header{
    background-image: url('${bgImg}');
}
text-align: center;
.containerDiv{
    display: grid;
    grid-template-columns: 1% 99%;
    padding-left: 10rem;
}
.navMenu{
    display: flex;
    justify-content: flex-end;
    margin-right: 0;
    padding-right: 0;
}
ul{
    margin-right: 0;
    padding-right: 0;
text-align: right;
    list-style: none;
    li{
        padding: 0.5rem;
        margin-right: 0;
        padding-right: 0;
        text-transform: uppercase;
        font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 500;
        color: gray;
    }
    li:hover{
        color: black;
    }
}
h2{
    font-family: 'lobster';
    font-weight: 400;
    margin-bottom: 2rem;
    margin-top: 5rem;
}
p{
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom: 10rem;
    color: gray;
    margin-left: 10rem;
    margin-right: 10rem;
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
    grid-template-columns: repeat(3, 1fr);

    margin-bottom: 10rem;
    padding-left: 5rem;
    padding-right: 10rem;

}
`