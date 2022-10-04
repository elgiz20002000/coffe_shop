import './coffe_house.scss'
import bean from '../../icon/bean.svg'
import bean_black from '../../icon/bean_black.svg'
import img_1 from '../../img/solimo.png'
import img_2 from '../../img/presto.png'
import img_3 from '../../img/aromistico.png'
import { Link } from 'react-router-dom'

export const CoffeHouse = () => {
    return (
        <>
            <section className="promo_1">
                <div className="container">
                    <h1>Everything You Love About Coffee</h1>
                    <div className="beans_icon">
                        <hr/>
                        <img src={bean} alt="bean"/>
                        <hr/>
                    </div>
                    <div className="descr_1">We makes every day full of energy and taste</div>
                    <div className="descr_2">Want to try our beans?</div>
                    <Link to={'/our_coffe'} ><button>More</button></Link>
                </div>
            </section>

            <section className="about_us">
               <div className="container">
                    <h2>About Us</h2>
                    <div className="beans_icon_black">
                        <hr/>
                        <img src={bean_black} alt="bean"/>
                        <hr/>
                    </div>
                    <div className="about_us_descr">
                    <span> Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face. </span>
                        <br /> 
                        <span>  Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.</span>
                    </div>
               </div>
            </section>

            <section className="our_best">
                <div className="container">
                    <h2>Our best</h2>
                    <div className="beans_list">

                        <div className="beans_list_item">
                            <img src={img_1} alt="" />
                            <div className="title">Solimo Coffee Beans 2 kg</div>
                            <div className="price">10.73$</div>
                        </div>

                        <div className="beans_list_item">
                            <img src={img_2} alt="" />
                            <div className="title">Presto Coffee Beans 1 kg</div>
                            <div className="price">15.99$</div>
                        </div>

                        <div className="beans_list_item">
                            <img src={img_3} alt="" />
                            <div className="title">AROMISTICO Coffee 1 kg</div>
                            <div className="price">6.99$</div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}