import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/features/collectionSlice';

const CollectionCard = ({item,onRemove}) => {

    const dispatch = useDispatch();

    const removeFromCollection = (item) => {
        dispatch(removeCollection(item.id));
        dispatch(removeToast());
    }

  return (
    <div className="relative mb-4 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition">

      <a href={item.url} target="_blank" rel="noreferrer">
        {item.type === 'photo' && (<img src={item.src} alt={item.title} className="w-full object-cover"/>)}
        {item.type === 'video' && (<video src={item.src} muted loop autoPlay className="w-full object-cover"/> )}
      </a>

      <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex flex-col justify-between p-4">
      
        <button className="self-end bg-red-500 text-white px-4 py-2 cursor-pointer rounded-full font-semibold active:scale-95" onClick={() => {removeFromCollection(item)}}>Remove</button>

        <h2 className="text-white text-sm font-medium line-clamp-2">{item.title}</h2>

      </div>
      
    </div>
  )
}

export default CollectionCard
