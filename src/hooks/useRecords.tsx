import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type newRecordItem = {
  tagId: number[]
  note: string
  category: '+' | '-'
  amount: number
}

type RecordItem = newRecordItem & {
  createdAt: string //ISO 8601
}


const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);

  const addRecord = (newRecord: newRecordItem) => {
    const record = {...newRecord, createdAt: (new Date()).toISOString()};
    setRecords([...records, record]);
  };
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);


  return {records, addRecord};
};

export {useRecords};