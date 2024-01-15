import Button from '../Reusable Items/Button'
import arrow from '../assets/arrow.png'
import video_img from '../assets/video-img.jpg'
import './Features.css'
const Article = () => {
  return (
    <article>
        <div className="article">
            

            <div className="left-side">
                <img src={arrow} alt="" className='arrow'/>
                <h1>10 Reason Why You&apos;ll Love Our HR <span>Technology</span></h1>
                <p>Unmatched Support: At Paragroup, we believe exceptional customer support is the cornestone of a successful business. Our dedicated team of professionals...</p>
                <Button/>
            </div>
            <div className="right-side">
             <i className="fa-solid fa-play"></i>
                <img src={video_img} alt="" />
            </div>
        </div>
    </article>
  )
}

export default Article