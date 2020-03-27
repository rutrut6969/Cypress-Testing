import styled from 'styled-components';

export const FormStyle = styled.form`
  display: flex;
  flex-flow: column wrap;
  background-color: rgba(200, 155, 100, 0.6);
  padding: 5px;
  margin: 10%;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 90vh;
  border-radius: 10px;
  &:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
    transition: 0.5s ease;
  }
`;

export const Input = styled.input`
  width: 50%;
  height: 5vh;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  margin: 5px;
`;

export const Btn = styled.button`
  width: 100px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px black;
    transition: 0.3s ease-in;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const LabelTos = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  margin: 2%;
`;
