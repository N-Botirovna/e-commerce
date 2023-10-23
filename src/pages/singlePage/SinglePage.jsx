import React, { useContext } from 'react'
import Header from '../../components/templates/header/Header'
import { SearchContext } from '../home/Home'

function SinglePage() {
    const {search, setSearch, state} = useContext(SearchContext)
    return (
        <>
        <Header/>
        <h1>Single Page</h1>
        </>
    )
}

export default SinglePage
