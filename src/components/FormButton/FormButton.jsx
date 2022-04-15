import StyledFormButton from './StyledFormButton';

export default function FormButton({ title, handler, type }) {
  return (
    <StyledFormButton type={type} onClick={handler}>
      {title}
    </StyledFormButton>
  );
}
