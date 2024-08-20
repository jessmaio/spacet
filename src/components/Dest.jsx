import Menu from './Menu'
import Planet from './Planet';
import { useEffect, useState } from 'react';
import mobile from './../assets/img/destination/background-destination-mobile.jpg'
import tablet from './../assets/img/destination/background-destination-tablet.jpg'
import desktop from './../assets/img/destination/background-destination-desktop.jpg'

const Dest = () => {
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
    setBodyBackground(); 
    // Update background image on window resize
    window.addEventListener('resize', setBodyBackground);
    // Prevent memory leaks when not in use
    return () => {
      window.removeEventListener('resize', setBodyBackground);
    };
  }, []);
    const planet = 
      [{
        key: 0,
        name: "Moon",
        text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        img: './src/assets/img/destination/image-moon.png',
        distance: "384,400 km",
        time: "3 days"
      },
      {
        key: 1,
        name: "Mars",
        text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        img: './src/assets/img/destination/image-mars.png',
        distance: "225 mil. km",
        time: "9 months"
      },
      {
        key: 2,
        name: "Europa",
        text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        img: './src/assets/img/destination/image-europa.png',
        distance: "628 mil. km",
        time: "3 years"
      },
      {
        key: 3,
        name: "Titan",
        text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        img: './src/assets/img/destination/image-titan.png',
        distance: "1.6 bil. km",
        time: "7 years"
      }];

    const [choice, setChoice] = useState(planet[0]);

    return (
      <>
      <Menu></Menu>
      <section className='homepage dest'>
        <div className='col1'>
          <h5><span className="bold fade">01</span> Pick your destination</h5>
          <img src = {choice.img}/>
        </div>
        <div className='col2'>
          <section className="navtab">
                  <ul>
                      <li>
                          <h5 onClick={()=>setChoice(planet[0])}>Moon</h5>
                      </li>
                      <li>
                          <h5 onClick={()=>setChoice(planet[1])}>Mars</h5>
                      </li>
                      <li>
                          <h5 onClick={()=>setChoice(planet[2])}>Europa</h5>
                      </li>
                      <li>
                          <h5 onClick={()=>setChoice(planet[3])}>Titan</h5>
                      </li>
                  </ul>
          </section>
          <Planet
                    key = {choice.key}
                    name = {choice.name}
                    text = {choice.text}
                    distance = {choice.distance}
                    time = {choice.time}
                    >
          </Planet>
        </div>
      </section>
    
      </>
    );
}
export default Dest
