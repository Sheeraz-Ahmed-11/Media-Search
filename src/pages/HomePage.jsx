import React from 'react'
import Tabs from '../components/Tabs'
import SearchBar from '../components/SearchBar'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const HomePage = () => {

    const { query } = useSelector((state) => state.search)

  return (
    <div>
        <SearchBar />

        {query != ''?<div>
            <Tabs />
            <ResultGrid />
        </div>:''}

    </div>
  )
}

export default HomePage