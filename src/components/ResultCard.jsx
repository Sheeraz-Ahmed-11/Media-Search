import React from 'react'
import { useDispatch } from 'react-redux';
import { addCollection, addedToast } from '../redux/features/collectionSlice';

const ResultCard = ({ item }) => {

  const dispatch = useDispatch();

  const addToCollection = (item) => {
    dispatch(addCollection(item))
    dispatch(addedToast())
  };

  return (
    <div className="relative mb-4 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition">
      
      <a href={item.url} target="_blank" rel="noreferrer">
        {item.type === 'photo' && (<img src={item.src} alt={item.title} className="w-full object-cover"/>)}
        {item.type === 'video' && (<video src={item.src} muted loop autoPlay className="w-full object-cover"/> )} 
      </a>

      <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex flex-col justify-between p-4">

        <button className="self-end bg-(--c3) text-white px-4 py-2 cursor-pointer rounded-full font-semibold active:scale-95" onClick={() => {addToCollection(item)}}>Save</button>

        <h2 className="text-white text-sm font-medium line-clamp-2">{item.title}</h2>

      </div>
    </div>
  )
}

export default ResultCard
