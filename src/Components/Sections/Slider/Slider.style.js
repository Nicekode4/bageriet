import styled from "styled-components";
import headerImg from "../../../Images/slide1.jpg"

export const SliderStyle = styled.article`
background-color: red;
height: 40rem;
background-image: url('${headerImg}');
background-size: cover;
h2{
    text-align: center;
    color: white;
    font-family: 'Lobster';
    font-weight: 400;
    font-size: 5rem;
}
`