import StyledFormButton from "./StyledFormButton";

export default function FormButton({ title, handler }) {

  return (
    <StyledFormButton
      onClick={() => {
        handler();
      }}
    >
      {title}
    </StyledFormButton>
  );
}
