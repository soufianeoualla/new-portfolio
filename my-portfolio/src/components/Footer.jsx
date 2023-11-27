
const Footer = () => {
  return (
    <footer>
        <div className="footer-wave"></div>
        <div className="footer-wrapper">
            <h1>Let&apos;s Discuss Your Project</h1>
            <div className="contact">
                
                <div className="email">
                <i className="bi bi-chat-square-dots-fill"></i>
                    <div>
                    <p>Email</p>
                    <em>Contact@Soufian.me</em>
                    </div>
                    
                </div>
                <div className="address">
                <i className="bi bi-crosshair"></i>
                    <div>
                    <p>Location</p>
                    <em>Hay el Mohammadi, <br /> Ouarzazate, Morocco </em>
                    </div>
                    
                </div>

            </div>

            <div className="social-icons">
            <a href="https://github.com/soufianeoualla" 
               rel="noopener noreferrer" 
               target='_blank' 
            ><i className="bi bi-github"></i></a>

            <a href="https://www.linkedin.com/in/soufianeoualla" rel="noopener noreferrer" target='_blank' ><i className="bi bi-linkedin"></i></a>

            <a href="https://www.instagram.com/soufiane.oualla/"rel="noopener noreferrer" target='_blank' ><i className="bi bi-instagram"></i></a>
            </div>

        </div>
    </footer>
  )
}

export default Footer