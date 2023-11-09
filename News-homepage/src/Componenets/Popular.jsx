import retro_img from './assets/image-retro-pcs.jpg'
import laptop_img from './assets/image-top-laptops.jpg'
import gaming_img from './assets/image-gaming-growth.jpg'


const Popular = () => {
  return (
    <div className="popular">
        <div className="popular-item">
            <img src={retro_img} alt="" className='img' />
            <div className="item-details">
                <h2>01</h2>
                <h3>Reviving Retro PCs</h3>
                <p>What happens when old PCs are given modern upgrades?</p>
            </div>
        </div>
        <div className="popular-item">
            <img src={laptop_img} alt="" className='img' />
            <div className="item-details">
                <h2>02</h2>
                <h3>Top 10 Laptops of 2022</h3>
                <p>Our best picks for various needs and budgets.</p>
            </div>
        </div>
        <div className="popular-item">
            <img src={gaming_img} alt="" className='img' />
            <div className="item-details">
                <h2>03</h2>
                <h3>The Growth of Gaming</h3>
                <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
        </div>
    </div>
  )
}

export default Popular