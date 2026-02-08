import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/searchSlice';


const SearchBar = () => {

  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text))
    setText('')
  }

  return (
    <div>
      <form className='flex p-10 gap-4 bg-(--c2)' onSubmit={(e) => {submitHandler(e)}}>
        <input required className='border-2 px-4 py-2 text-xl rounded outline-none w-full' type="text" placeholder='Search anything...' value={text} onChange={(e) => {
          setText(e.target.value);
        }} />
        <button className='text-black px-4 py-2 text-xl rounded outline-none cursor-pointer active:scale-95 bg-(--c4)'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar