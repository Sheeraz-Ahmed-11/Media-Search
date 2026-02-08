import React, { useEffect } from 'react'
import { fetchPhotos, fetchVideos } from '../api/mediaApi'
import { setActiveTab, setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux' 
import ResultCard from './ResultCard'

const ResultGrid = () => {

  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector((store)=>store.search);


useEffect(function() {

  if (!query) return

  const getData = async () => {

    try {

      dispatch(setLoading())

      let data = []
      
      if (activeTab === 'photos') {
        let res = await fetchPhotos(query);
        data = res.results.map((item) => ({
          id: item.id,
          type: 'photo',
          title: item.alt_description,
          thumbnail: item.urls.small,
          src: item.urls.full,
          url: item.links.html
        }));
      }
      if (activeTab === 'videos') {
        let res = await fetchVideos(query);
        data = res.videos.map((item) => ({
          id: item.id,
          type: 'video',
          title: item.user?.name || 'video',
          thumbnail: item.image,
          src: item.video_files?.[0]?.link,
          url: item.url
        }))
    };

    dispatch(setResults(data));
    } catch (err) {
      dispatch(setError(err.message));
    }
    
  };

  getData();

}, [query, activeTab, dispatch]);

if (error) return <h1>Error</h1>
if (loading) return <h1>Loading...</h1>


  return (
    <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4'>
      {results.map((item, idx) => {
        return <div key={idx}>
          <ResultCard item={item} />
        </div>
      })}
    </div>
  )
}

export default ResultGrid