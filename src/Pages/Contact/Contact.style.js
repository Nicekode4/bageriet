import styled from "styled-components";
import bgImg from "../../Images/slide1.jpg"
export const ContactStyle = styled.article`
header{
    background-image: url('${bgImg}');
}
font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
text-align: center;
.containerDiv{
    display: grid;
    text-align: left;
    grid-template-columns: repeat(2,1fr);
    margin-left: 5rem;
    margin-right: 5rem;
    margin-bottom: 10rem;
}
span{
    font-weight: 400;
}
h2{
    font-family: 'lobster';
    font-weight: 400;
    margin-top: 5rem;
    margin-bottom: 1rem;
}
p{
    margin-bottom: 10rem;
    margin-left: 5rem;
    margin-right: 5rem;
    color: gray;
}
form{
    margin-right: 1rem;
    border:  none;
    input{
     display: block;  
     width: 96%;
     margin-bottom: 0.5rem;
     border:  none;
     background-color: wheat;
     padding: 0.5rem;
    }
    textarea{
        display: block;
        width: 96%;
        margin-bottom: 0.5rem;
        border:  none;
        background-color: wheat;
        padding: 0.5rem;
    }
    button{
        display: block;
    }
    
}
.mapDiv{
        h4{
            margin-bottom: 0.5rem;
            color: gray;
        }
        iframe{
          height: 12rem;  
        }
        
}
`