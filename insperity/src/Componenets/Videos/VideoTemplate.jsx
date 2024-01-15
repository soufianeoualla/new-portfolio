import Button from '../Reusable Items/Button'
const VideoTemplate = ({videoThumbnail,position,fullname,img,p}) => {
  return (
    <div className="video-template">
        <div className="thumbnail-video">
            <img src={videoThumbnail} alt="" />
            
        <i className="fa-solid fa-play"></i>
        </div>
        <div className="client">
            <div className="name">
                <span>{position} </span>
                <strong>{fullname} </strong>
            </div>
            <div className="company">
                    <img src={img} alt="" />
            </div>
        </div>
        <p>
            {p}
        </p>
        <Button/>
    </div>
  )
}

export default VideoTemplate