import styled from 'styled-components';
import { baseTheme } from '../../styles/variables';
import plus from './plus.svg';
import minus from './minus.svg';
import FormButton from '../FormButton/StyledFormButton';

export const FormModal = styled.div`
    display: flex;
  flex-direction: column;
  padding: 0 73px;
  }
  .select,
  .comment,
  .numberInput,
  .dateInput{
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 18px;
  line-height: 1.5;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid;
  border-color:${baseTheme.colors.lightGray};
  }
.comment::placeholder {
  color: ${baseTheme.colors.lightGray};
  font-size: 18px;
  margin-bottom:8px;
}
.comment{
  height:30px;
}

 .inputCont{
   display:flex;
justify-content:space-around;
 }
 .dateInput{
   margin-left:32px;
   width:181px;
 }
 .numberInput{
   width:181px;
 }
.btn{
 margin-bottom:20px;
 }

`

export const Checkbox = styled.div`
text-align: center;
margin-bottom: 40px;
color: ${baseTheme.colors.gray};
}
.checkbox__label-right{
color:${baseTheme.colors.lightGray};
font-style: normal;
font-weight: bold;
font-size: 16px;
margin-right:24px;
line-height: 1.5;
}
.checkbox__label-left{
  color:${baseTheme.colors.lightGray};
font-style: normal;
font-weight: bold;
font-size: 16px;
margin-left:24px;
line-height: 1.5;
}
.checkbox__toggle {
position: relative;	
  display: inline-block;
   box-sizing: border-box;			
   width: 80px;	
   height: 40px;
   border: 1px solid rgba(0, 0, 0, .1);
border-radius: 25%/50%;	
   vertical-align: top;
   background: #eee;
   transition: .2s;
}

.checkboxInput {
position: relative;
opacity: 0;
}
.checkboxInput + label {
position: relative;
padding: 10px 0 10px 80px;
cursor: pointer;
}
.checkboxInput + label:before {
content: '';
position: absolute;
top: 50px;
left: 5;
width: 80px;
height: 40px;
border-radius: 20px;
transition: 0.2s;
}
.checkboxInput + label:after {
content: '';
font-size: 50px;
position: absolute;
top:-12px;
left: 36px;
width: 44px;
height: 44px;
background: url(${minus}) no-repeat center;
background-color: ${baseTheme.colors.red};

color: black;
border-radius: 50%;
box-shadow: 0 6px 15px 0 rgba(255, 101, 150, 0.5);
transition: 0.2s;
}

.checkboxInput:checked + label:after {
content: '';
background: url(${plus}) no-repeat center;
background-color: ${baseTheme.colors.green};
box-shadow: 0 6px 15px 0 rgba(36, 204, 167, 0.5);
left: -2px;
}
`;
export const СancelBtn=styled(FormButton)`
background: ${baseTheme.colors.white};
border:1px solid ${baseTheme.colors.purple};
color:${baseTheme.colors.purple};
margin-top:20px;
`