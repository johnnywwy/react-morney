import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import {CategorySection} from './Money/CategorySection';
import {newOutput, NumberPadSection} from './Money/NumberPadSection';
import {useRecords} from '../hooks/useRecords';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

const CategoryWrapper = styled.div`
  background: #c4c4c4;
`;

type Category = '-' | '+';

const defaultFormData = {
  tagId: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
};

function Money() {
  const [selected, setSelected] = useState(defaultFormData);

  const {addRecord} = useRecords();

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };

  const submit = () => {
    if (addRecord(selected)) {
      window.alert('保存成功！');
      // window.location.reload()
      console.log('newOutput',newOutput);
      console.log(selected);
    }
    setSelected(defaultFormData);
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

      <CategoryWrapper>
        <CategorySection
          value={selected.category}
          onchange={category => onChange({category})}/>
      </CategoryWrapper>

      <NumberPadSection
        value={selected.amount}
        onchange={(amount) => onChange({amount})}
        onOk={submit}
      />
    </MyLayout>

  );
}

export default Money;