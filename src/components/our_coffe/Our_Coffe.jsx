import './our_coffe.scss' 
import bean_black from '../../icon/bean_black.svg'
import girl from '../../img/girl.jpg'
import aromatisco from '../../img/aromatisco.jpg'
import { createContext, useState } from 'react'
import { FilterSearch } from '../FilterSearch/FilterSearch'
import { BeansList } from '../BeansList/BeansList'

export const context = createContext({filter:'All'})

export const OurCoffe = () => {

    const [selected , setSelected] = useState()
    
    const [data , setData] = useState(
        {filter: 'All' , 
        search:'' , 
        setFilter:(val) => setData((data) => ({...data , filter:val})) ,
        setSearch: (val) => setData((data) => ({...data , search:val}))})
    const {Provider} = context

    return (
        <>
            <section className="promo promo_2">
                <h1>Our Coffe</h1>
            </section>

            <main>
                {!(selected )? <>
                    <section className="about_our_beans">
                    <div className="container">
                        <div className="wrapper">
                                <img src={girl} alt="girl" />
                                <div className="info">
                                    <h2>About our beans</h2>
                                    <div className="beans_icon_black">
                                        <hr/>
                                        <img src={bean_black} alt="bean"/>
                                        <hr/>
                                    </div>
                                    <div className="descr">
                                    <span> Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. </span>
                                <br />

                                    Afraid at highly months do things on at. Situation recommend objection do intention
                                    so questions. <br />
                                    As greatly removed calling pleased improve an. Last ask him cold feel <br />
                                    met spot shy want. Children me laughing we prospect answered followed. At it went
                                    is song that held help face.
                                    </div>
                                </div>
                            </div>
                    </div>
                    </section>

                    <hr />

                <section className="coffe_beans">
                    <div className="container">
                    <Provider value={data} >
                            <FilterSearch/>
                            <BeansList setSelected={setSelected}/>
                    </Provider>
                    </div>
                </section> 
                </>: null}
                
               { selected ?  <section className="about_it">
                <div className="container">
                        <div className="wrapper">
                                <img src={aromatisco} alt="aromatisco" />
                                <div className="info">
                                    <h2>About our beans</h2>
                                    <div className="beans_icon_black">
                                        <hr/>
                                        <img src={bean_black} alt="bean"/>
                                        <hr/>
                                    </div>
                                    <div className="country">Country: <span>Brazil</span></div>
                                    <div className="descr">
                                    Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                    <div className="price">Price: <span> 16.99$</span>
                                    </div>
                                </div>
                            </div>
                    </div>
                </section> : null}
            </main>
        </>
    )
}



