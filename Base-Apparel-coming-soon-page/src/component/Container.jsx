import HeroDesktop from "./HeroDesktop"
import HeroMobile from "./HeroMobile"
import Input from "./Input"
import Logo from "./Logo"

const container = () => {
  return (
    <div className="container">
    <div className="text">
      <Logo/>
      <HeroMobile/>
      <div className="content">
        <h1><span>WE&apos;RE</span> <br/>COMING <br/>SOON</h1>
        <p>Hello fellow shoppers! We&apos;re currently building our new fashion store. 
          Add your email below to stay up-to-date with announcements and our launch deals.</p>
          <Input/>
        </div>
    </div>
    <HeroDesktop/>
  </div>
  )
}

export default container