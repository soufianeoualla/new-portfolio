import Sidebar from './Sidebar'
import  web_3 from './assets/image-web-3-desktop.jpg'
import  web_3_mobile from './assets/image-web-3-mobile.jpg'
const Home = () => {
  return (
    <div className="home">
        <div className="article">
            <div className="article-img">
                <picture>
                    <source media="(min-width:768px )" srcSet={web_3} />
                    <img src={web_3_mobile} alt="" />
                </picture>
            </div>
            <div className="article-info">
                <h1>The Bright Future of Web 3.0?</h1>
                <div className="article-text">
                    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                    But is it really fulfilling its promise?</p>
                    <button className='btn'>
                        <a href="">Read more</a>
                    </button>
                </div>
            </div>

        </div>

        <Sidebar/>
    </div>
  )
}

export default Home