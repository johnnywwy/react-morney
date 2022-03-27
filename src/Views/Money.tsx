import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import {useRecords} from '../hooks/useRecords';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;


type Category = '-' | '+';

const defaultFormData = {
  tagId: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
};

function Money() {
  console.log('money执行了');
  const [selected, setSelected] = useState(defaultFormData);

  const {records, addRecord} = useRecords();
  console.log('records', records);

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };

  const submit = () => {
    addRecord(selected);
    window.alert('保存成功！');
    setSelected(defaultFormData);
  };

  return (
    <MyLayout>
      {JSON.stringify(selected)}
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
        onOk={submit}
      />
    </MyLayout>

  );
}

export default Money;