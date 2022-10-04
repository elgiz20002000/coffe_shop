import { useContext } from "react"
import { context } from "../our_coffe/Our_Coffe"

export const FilterSearch = () => {
    const {setFilter , setSearch} = useContext(context)
    return (
    <div className="wrapper">
        <div className="search">
            <span className='label'>Lookiing for</span>
            <input onInput={(e) => setSearch(e.target.value)} type="text" placeholder='start typing here...'/>
        </div>
        <div className="filter">
            <span className='label'>Or filter</span>
            <div className="filters">
                <div className="filter_item" onClick={(e) => setFilter(e.target.textContent)}>All</div>
                <div className="filter_item" onClick={(e) => setFilter(e.target.textContent)}>Brazil</div>
                <div className="filter_item" onClick={(e) => setFilter(e.target.textContent)}>Kenya</div>
                <div className="filter_item" onClick={(e) => setFilter(e.target.textContent)}>Columbia</div>
            </div>
        </div>
    </div>
    )
}