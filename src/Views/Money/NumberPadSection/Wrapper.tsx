import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  > .output {
    background: #FFF;
    font-size: 32px;
    line-height: 64px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
    inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);

  }

  > .pad {
    > button {
      font-size: 18px;
      float: left;
      width: 25%;
      height: 48px;
      border: none;

      &.save {
        float: right;
        height: 96px;
      }

      &.zero {
        width: 50%;
      }

      &:nth-child(1) {
        background: #f2f2f2;
      }

      &:nth-child(2), &:nth-child(5) {
        background: #e0e0e0;
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: #D3D3D3;
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: #c1c1c1;
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: #b8b8b8;
      }

      &:nth-child(14) {
        background: #a9a9a9;
      }

      &:nth-child(12) {
        background: #9a9a9a;
      }

    }
  }

`;

export {Wrapper}