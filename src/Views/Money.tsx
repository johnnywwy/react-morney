import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;


type Category = '-' | '+';

function Money() {
  const [selected, setSelected] = useState({
    tagId: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
  });

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };

  return (
    <MyLayout>
      <TagsSection
        value={selected.tagId}
        onchange={tagId => onChange({tagId})}
      />
      <NoteSection
        value={selected.note}
        onchange={note => onChange({note})}
      />
      <CategorySection
        value={selected.category}
        onchange={category => onChange({category})}/>
      <NumberPadSection
        value={selected.amount}
        onchange={(amount) => onChange({amount})}
        onOk={() => {
          console.log(selected);
          window.alert('保存成功！');
        }}
      />
    </MyLayout>

  );
}

export default Money;