import RetroPcs from "../assets/images/image-retro-pcs.jpg";
import Laptops from "../assets/images/image-top-laptops.jpg";
import GamingGrowth from "../assets/images/image-gaming-growth.jpg";

const Trending = () => (
  <div className="trending" id="trending">
    <div>
      <img src={RetroPcs} alt="image retro pcs" />
      <div>
        <h3>01</h3>
        <h4>Reviving Retro PCs</h4>
        <p>What happens when old PCs are given modern upgrades?</p>
      </div>
    </div>
    <div>
      <img src={Laptops} alt="image top laptops" />
      <div>
        <h3>02</h3>
        <h4>Top 10 Laptops of 2022</h4>
        <p>Our best picks for various needs and budgets.</p>
      </div>
    </div>
    <div>
      <img src={GamingGrowth} alt="image gaming growth" />
      <div>
        <h3>03</h3>
        <h4>The Growth of Gaming</h4>
        <p>How the pandemic has sparked fresh opportunities.</p>
      </div>
    </div>
  </div>
);

export default Trending;
