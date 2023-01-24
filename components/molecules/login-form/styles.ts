import styled from "styled-components";

export const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 400px;
  border: 1px solid ${(props) => props.theme.lightTheme.bg};
  height: 600px;

  h2 {
    margin: 20px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 400px;

  input {
    display: flex;
    width: 90%;
    margin: 5px; 
    border-radius: 5px;
    border: none;
  }

  button {
    margin: 5px;
  }
`;
