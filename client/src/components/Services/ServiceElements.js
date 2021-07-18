import styled from 'styled-components'

export const ServicesContainer = styled.div`
height:1000px;
width:100%;
display:flex;
margin-right:75px;
margin-top:-130px;

flex-direction:column;
justify-content:center;
align-items:center;
background:#fff;

@media screen and (max-width:768px){
    height:1000px;
}

@media screen and (max-width:480px){
    height:1300px
}
`
export const ServicesfluidContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
background:#f0f7f7;
padding: 60px 10px 60px 10px;
margin:10px;

@media screen and (max-width:768px){
    height:1100px;
}

@media screen and (max-width:480px){
    height:1300px
}
`
export const ServicesWrapper = styled.div`

max-width:1000px;
margin:0 auto;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
align-items:center;
grid-gap:70px;
padding: 0 50px;

@media screen and (max-width:1000px){
    grid-template-colums: 1fr 1fr;
    padding: 0 20px;

}

@media screen and (max-width:768px){
    grid-template-colums: 1fr;
    padding: 0 20px;

}`

export const ServicesCard = styled.div`
background:#fff;
display:flex;
border:1px solid green;
flex-direction:column;
justify-content:space-evenly,
align-items:center;
border-radius:10px;
max-height:450px;
height:300px;
width:280px;
padding:30px;
text-align:center;
box-shadow:3px 5px 3px rgba(0,0,0,0.3);
transition:all 0.2s ease-in-out;

&:hover{
    transform:scale(1.31);
    transition:all 0.3s ease-in-out;
    cursor:pointer;

}`

export const ServicesIcon = styled.img`
height:180px;
width:280px;
border:1px soild green;
margin-bottom:10px
`
export const ServicesTopHeading = styled.div`
font-size:3.5rem;
color:green;
font-weight:700;
margin-bottom:64px;
font-family:"cursive";
@media screen and (max-width:480){
    font-size:2rem;
}
`
export const ServicesH1 = styled.div`
font-size:1.6rem;
color:#687373;
margin-bottom:64px;
font-weight:600;
font-family: cursive;

@media screen and (max-width:480){
    font-size:2rem;
}
`
export const ServicesH2 = styled.h2`
font-size:1.4rem;
margin-bottom:10px;
font-family:'Times New Roman', Times, serif;
`