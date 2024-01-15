import team_img from '../assets/team-work-productivity.jpg'
const LastArticle = () => {
  return (
    <article>
        <div className="productivity">
          <div className="left-side">
            <h1>Load and Maximize Your <span>Productivity</span> While Managing Your Risks.</h1>
            <p>
            Insperity is committed to helping the communities where we work and
            live through corporate contributions, volunteer efforts, community
            leadership and social responsivity. 
            </p>
            <button className="secondary-btn">
                Get More Information
            </button>
          </div>
          <div className="right-side">
                <img src={team_img} alt="" />
          </div>
        </div>
    </article>
  )
}

export default LastArticle