import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 8px 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: white;
  background-color: #64B5F6;
  border: none;
  border-radius: 20px;
  box-shadow: 0 3px 6px rgba(25, 118, 210, 0.2);
  cursor: pointer;
  overflow: hidden;
  transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
  transform: translateZ(0);

  :hover {
    box-shadow: 0 4px 10px rgba(25, 118, 210, 0.4);
    transform: scale(1.01, 1.01) translateY(-2px);
  }
`;

export default Button;
