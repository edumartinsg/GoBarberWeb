import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  header {
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    padding: 40px 0;
    background: #28262e;

    div {
      width: 100%;
      max-width: 1120px;
    }
    a {
      margin-left: 20%;
      svg {
        color: #999591;
        width: 24px;
        height: 24px;
        margin-left: 20% !important;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  justify-content: center;

  width: 100%;
  align-items: center;
  form {
    margin: 40px 0;
    width: 300px;
    display: flex;
    flex-direction: column;
    text-align: center;
    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
      margin-top: 14px;
    }
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }
  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #ff9000;
    border-radius: 50%;
    right: 60px;
    bottom: 0;
    border: 0;
    transition: background-color 0.2s;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    input {
      display: none;
      cursor: pointer;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
  svg {
    height: 20px;
    width: 20px;
    color: #312e3b;
  }
`;
