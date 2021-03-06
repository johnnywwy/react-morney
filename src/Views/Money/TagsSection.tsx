import styled from 'styled-components';
import React from 'react';
import {useTags} from 'hooks/useTags';


const Wrapper = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;

    > li {
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;

      &.selected {
        color: white;
        background: #f60;
      }
    }

  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    color: #666;
    border-bottom: 1px solid #333;
    margin-top: 8px;

  }
`;

type Props = {
  value: number[];
  onchange: (selected: number[]) => void;
}

const TagsSection: React.FC<Props> = (props) => {
  const {tags, addTag} = useTags();
  const selectedTagId = props.value;
  const onToggleTag = (tagId: number,) => {
    const index = selectedTagId.indexOf(tagId);
    if (index >= 0) {
      props.onchange(selectedTagId.filter(t => t !== tagId));
      //  如果tag 已经选中，就复制所有没有被选中的tag，作为新的selectTag
    } else {
      props.onchange([tagId]);
      // setSelectedTags([...selectedTagId,tag]);
    }
  };
  const getClass=(tagId:number)=>selectedTagId.indexOf(tagId) >= 0 ? 'selected' : ''
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li
            key={tag.id}
            onClick={() => {onToggleTag(tag.id);}}
            className={getClass(tag.id)}
          >{tag.name}</li>
        )}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  );
};


export {TagsSection};