import { useEffect } from 'react';
import { Link } from "react-router-dom"
import mobile from './../assets/img/home/background-home-mobile.jpg'
import tablet from './../assets/img/home/background-home-tablet.jpg'
import desktop from './../assets/img/home/background-home-desktop.jpg'

const Home = () => {
    useEffect(() => {
      const setBodyBackground = () => {
        if (window.innerWidth > 600 && window.innerWidth < 900) { 
          document.body.style.backgroundImage = `url('${tablet}')`;
        } else if (window.innerWidth >= 900) { 
          document.body.style.backgroundImage = `url('${desktop}')`;
        } else { 
          document.body.style.backgroundImage = `url('${mobile}')`;
        }
      };
      setBodyBackground();  // Prima chiamata
      // Update a seconda del resize
      window.addEventListener('resize', setBodyBackground);
      // Prevenire consumo memoria
      return () => {
        window.removeEventListener('resize', setBodyBackground);
      };
    }, []);
  
    return (
      <>
      <section className="homepage">
        <div className='home'>
          <h4>So, you want to travel to</h4>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <Link to = {"/dest"}>
            <button className="explore bellefair-regular">EXPLORE</button>
        </Link>
      </section>
  
      </>
    );
}
export default Home