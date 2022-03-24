import styled from 'styled-components';
import React, {useRef} from 'react';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;

  > label {
    display: flex;
    align-items: center;

    > span {
      padding-right: 16px;
      white-space: nowrap;
    }

    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;

type Props = {
  value: string;
  onchange: (value:string) => void
}

const NoteSection: React.FC<Props> = (props) => {

  const note = props.value
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current !== null) {
      props.onchange(refInput.current.value);
    }
  };
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          type="text" placeholder="在这里添加备注"
          defaultValue={note}
          onBlur={onBlur}
          ref={refInput}
        />
      </label>
    </Wrapper>
  );
};


export {NoteSection};