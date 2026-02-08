import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../redux/features/searchSlice';

const Tabs = () => {

  const tabs = ['photos', 'videos'];

  const dispatch = useDispatch();

  const activeTab = useSelector((state)=> state.search.activeTab);

  return (
    <div className='flex gap-10 p-10'>
      {tabs.map(function(elem, idx) {
        return <button key={idx} className={`${(activeTab==elem?'bg-(--c4) text-black':'bg-(--c3) text-white border-2 border-(--c4)')} transition px-6 py-2 rounded cursor-pointer active:scale-95 uppercase`} onClick={() => {
          dispatch(setActiveTab(elem))
        }}>{elem}</button>
      })}
    </div>
  )
}

export default Tabs