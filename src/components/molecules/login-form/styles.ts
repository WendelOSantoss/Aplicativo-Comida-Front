import styled from "styled-components";

export const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 400px;
  border: 1px solid 
  height: 600px;

  h2 {
    margin: 20px;
  }
`;

export type StyledFormProps = {
  error: boolean;
};

export const StyledForm = styled.form<StyledFormProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;

  input {
    display: flex;
    padding: 3px 5px;
    width: 90%;
    margin: 5px;
    border-radius: 5px;
    border: solid 2px red
    height: 35px;
    background: rgba(0, 0, 225, 0.6)
    font-size: 1.2rem;
  }

  div {
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: 5px;
    border-radius: 5px;
    border: none;
    align-items: center;

    input {
      display: flex;
      width: 100%;
      border-radius: 5px 0 0 5px;
      border-right: none;
      padding: 3px 5px;
      margin: 0;
      height: 35px;
    }

    button {
      display: flex;
      border: solid 2px red
      border-left: none;
      margin: 0;
      padding: 0 5px;
      cursor: pointer;
      border-radius: 0 5px 5px 0;
      height: 35px;
      align-items: center;
  
    }
  }

  button {
    display: flex;
    align-items: center;
    border: none;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    background-color: 
    cursor: pointer;
  }
`;
