import avatar_img from './assets/avatar-michelle.jpg'

const Avatar = () => {
  return (
    
        <div className="avatar-details">
            <img src={avatar_img} alt=""/>
            <div className="avatar-name">
                <b>Michelle Appleton</b>
                <p>28 Jun 2020</p>
            </div>
        </div>

  )
}

export default Avatar