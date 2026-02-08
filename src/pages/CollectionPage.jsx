import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection } from '../redux/features/collectionSlice';

const CollectionPage = () => {

  const dispatch = useDispatch();

  const collection = useSelector((state) => state.collection.items);

  const clearFromCollection = () => {
    dispatch(clearCollection())
  }

  return (
    <div>

      <div className='flex justify-between py-12 px-6 bg-(--c2) mb-6 text-center'>
        
        {collection.length > 0? <div className='flex justify-between w-full text-center'>
          
          <h2 className='text-xl font-semibold '>Your Collection</h2>

          <button className="self-end bg-red-500 text-white px-4 py-2 cursor-pointer rounded font-semibold active:scale-95" onClick={() => clearFromCollection()}>Clear Collection</button>

        </div> : <h2 className='text-xl font-semibold '>Your collection is empty</h2>}

      </div>

      

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {collection.map((item, idx) => (
          <CollectionCard key={idx} item={item} />
        ))}
      </div>

    </div>
  )
}

export default CollectionPage
