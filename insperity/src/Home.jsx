import Article from './Componenets/Articles/Article'
import Features from './Componenets/Articles/Features'
import LastArticle from './Componenets/Articles/LastArticle'
import Footer from './Componenets/Footer/Footer'
import Header from './Componenets/Header/Header'
import HeroSection from './Componenets/Hero/HeroSection'
import Journey from './Componenets/Journey/Journey'
import Services from './Componenets/Services/Services'
import Videos from './Componenets/Videos/Videos'


export const Home = ({contactClicked,thankyou,setContactClicked,setThankYou,mobile,setMobile}) => {

    const handleclick =()=>{
        if(contactClicked){
          setContactClicked(false)
        }
        if(thankyou){
          setThankYou(false)
        }
      }
  return (
    <div onClick={handleclick}
    className={`  ${(contactClicked || thankyou || mobile)? 'container':'' }`}>
    <Header
      setContactClicked={setContactClicked}
       mobile={mobile}
       setMobile={setMobile} />

      <HeroSection
      setContactClicked={setContactClicked}/>

      <Services/>

      <Features/>

      <Article/>

      <Journey/>

      <Videos/>

      <LastArticle/>
      
      <Footer/>
      
    </div>
  )
}
