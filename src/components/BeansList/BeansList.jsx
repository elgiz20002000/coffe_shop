import { useState } from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import img from '../../img/default.png'
import { context } from '../our_coffe/Our_Coffe'

export const BeansList = ({setSelected , url}) => {
    const {filter , search} = useContext(context)
    const [items , setItems] = useState([{img , title:'Solimo Coffee Beans 2 kg' , country:'Brazil' , price: 10.73 },
    {img , title:'Solimo Coffee Beans 2 kg' , country:'Kenya' , price: 10.73 },
    {img , title:'Aromatisco' , country:'Columbia' , price: 10.73 },
    {img , title:'Espresso' , country:'Brazil' , price: 10.73 },
    {img , title:'Cappucino' , country:'Brazil' , price: 10.73 },
    {img , title:'Latte' , country:'Brazil' , price: 10.73 }])

    let HtmlContent = Filter(items , filter , search).map((item , i) => {
        return (
             <NavLink end to={`/our_coffe/${i + 1}`}>
                   <div className="beans_list_item" key={i} onClick={() => setSelected(i + 1)}>
                    <img src={item.img} alt="bean" />
                    <div className="title">{item.title}</div>
                    <div className="country">{item.country}</div>
                    <div className="price">{item.price}$</div>
                </div>
             </NavLink>
        )
    })
    return (
        <div className="beans_list">
            {HtmlContent}
        </div>

    )
}

const Filter = (items , filter_name , search) => {

    if(search) {
        return items.filter(item => item.title.search(search) === 0)
    }

    if(filter_name === 'All') {
        return items
        }
        if (filter_name === 'Brazil' || filter_name ===   'Columbia' || filter_name ===  'Kenya') {
            return items.filter(item => item.country === filter_name)
        }
   
}

