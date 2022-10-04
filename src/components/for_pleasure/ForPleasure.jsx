
import './for_pleasure.scss'
import bean_black from '../../icon/bean_black.svg'
import dark_coffe from '../../img/dark_coffe.jpg'
import { BeansList } from '../BeansList/BeansList'
import { useState } from 'react'


export const ForPleasure = () => {
    const [selected , setSelected] = useState()
    return (
    <>
      <section className="promo promo_3">
                <h1>For Your Pleasure</h1>
            </section>

            <main>
                <section className="about_our_beans">
                <div className="container">
                    <div className="wrapper">
                            <img src={dark_coffe} alt="dark_coffe" />
                            <div className="info">
                                <h2>About our goods</h2>
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
                            <BeansList setSelected={setSelected}/>
                        </div>
                </section>
            </main>
    </>
    )
}