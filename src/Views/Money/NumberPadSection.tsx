import React, {useEffect, useState} from 'react';
import {Wrapper} from './NumberPadSection/Wrapper';
import {generateOutput} from './NumberPadSection/generateOuyput';

type Props = {
  value: number;
  onchange: (value: number) => void;
  onOk?: () => void
}

const NumberPadSection: React.FC<Props> = (props) => {
  const [output, _setOutput] = useState(props.value.toString());
  // const output = props.value.toString();
  const setOutput = (output: string) => {
    let newOutput: string;
    if (output.length > 18) {
      newOutput = output.slice(0, 18);
    } else if (output.length === 0) {
      newOutput = '0';
    } else {
      newOutput = output;
    }
    _setOutput(newOutput);
    props.onchange(parseFloat(newOutput));
  };

  useEffect(() => {
    _setOutput(props.value.toString())
  },[props.value]);

  const onClickButton = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {return;}
    if (text === '保存') {
      if (props.onOk) {
        props.onOk();
        // setOutput('')
      }
      return;
    }
    if ('.0123456789'.split('').concat(['删除', '清空']).indexOf(text) >= 0) {
      setOutput(generateOutput(text, output));
    }
  };
  return (
    <Wrapper>
      <div className="output">
        {output}
      </div>
      <div className="pad clearfix" onClick={onClickButton}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="save">保存</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  );
};

export {NumberPadSection};