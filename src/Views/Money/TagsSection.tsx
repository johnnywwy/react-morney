import styled from 'styled-components';
import React, {useState} from 'react';
import {useTags} from 'useTags';

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
  value: string[];
  onchange: (obj: string[]) => void;
}

const TagsSection: React.FC<Props> = (props) => {

  const {tags, setTags} = useTags();

  const selectedTags = props.value;

  const onAddTag = () => {
    const tagName = window.prompt('新标签名称为');
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }
  };

  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      props.onchange(selectedTags.filter(t => t !== tag));
      //  如果tag 已经选中，就复制所有没有被选中的tag，作为新的selectTag
    } else {
      props.onchange([tag]);
      // setSelectedTags([...selectedTags,tag]);
    }
  };
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li
            key={tag}
            onClick={() => {onToggleTag(tag);}}
            className={selectedTags.indexOf(tag) >= 0 ? 'selected' : ''}
          >{tag}</li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};


export {TagsSection};