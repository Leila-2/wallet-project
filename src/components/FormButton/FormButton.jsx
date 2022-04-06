import StyledFormButton from './StyledFormButton';

export default function FormButton({ title, handler }) {
  return <StyledFormButton type='submit' onClick={handler}>{title}</StyledFormButton>;
}
