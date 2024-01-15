import VideoTemplate from "./VideoTemplate"
import video_thumbnail_1 from '../assets/video-thumbnail-1.jpg'
import video_thumbnail_2 from '../assets/video-thumbnail-2.jpg'
import video_thumbnail_3 from '../assets/video-thumbnail-3.jpg'
import logo_boa from '../assets/logo-boa.png'
import clever_logo from '../assets/CD_LOGO.png'
import evolve_logo from '../assets/logo-evolve.png'


import './Videos.css'

const Videos = () => {
  return (
    <article>
        <div className="videos">
            <h1>See How Insperity Customers Are Finding <span>Success</span></h1>
            <p>Insperity, a leading provider of human resources and business performance solutions, has a track record of helping.
            its customers achieve success in various ways. One of the koy factors contributing to this success is Inspority
            commitment to providing tailored HR solutions and support.</p>
            <div className="videos-section">
                <VideoTemplate
                videoThumbnail={video_thumbnail_1} 
                position={'Founder'}
                fullname={'Matthew Mogar'}
                img={logo_boa} 
                p={"It a very customized approach. it similar to howwe are with our clients. Without them, i don't think we could scale."}/>


                <VideoTemplate
                videoThumbnail={video_thumbnail_2} 
                position={'Co-Founder'}
                fullname={'Kathleen Joyce'}
                img={clever_logo} 
                p={"Florida City Makes Headlines as One of the World's Worst Metros for Traffic Congestion the idea of making"}/>


                <VideoTemplate
                videoThumbnail={video_thumbnail_3} 
                position={'Co-Founder'}
                fullname={'Ron Shaich Panera'}
                img={evolve_logo} 
                p={"Panera founder says employees today aren't motivated bt the idea of making money for shareholders: 'Nobody cares' "}/>

            </div>
            <button className="secondary-btn">
                See More Client Stories
            </button>
        </div>
    </article>
  )
}

export default Videos