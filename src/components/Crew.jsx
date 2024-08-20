import Menu from './Menu'
import Staff from './Staff';
import { useEffect, useState } from 'react';
import mobile from './../assets/img/crew/background-crew-mobile.jpg'
import tablet from './../assets/img/crew/background-crew-tablet.jpg'
import desktop from './../assets/img/crew/background-crew-desktop.jpg'


const Crew = () => {
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
    const elements = [
      {
        key : 0,
        role: "Commander",
        name: "Douglas Hurley",
        text:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        img: './src/assets/img/crew/image-douglas-hurley.png'
      },
      {
        key : 1,
        role: "Flight Engineer",
        name: "Anousheh Ansari",
        text:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        img: './src/assets/img/crew/image-anousheh-ansari.png'
      },
      {
        key : 2,
        role: "Pilot",
        name: "Victor Glover",
        text:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
        img: './src/assets/img/crew/image-victor-glover.png'
      },
      {
        key : 3,
        role: "Mission Specialist",
        name: "Mark Shuttleworth",
        text:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        img: './src/assets/img/crew/image-mark-shuttleworth.png'
      }
    ];
    const [choice, setChoice] = useState(elements[0]);
    const click = (i) => {
      setChoice(elements[i]);
    };

    return (
      <>
      <Menu></Menu>
      <section className='homepage crew'>
        <h4 className='meet'><span className="bold fade">02</span> Meet your crew</h4>
        <section className='imm'>
          <img src = {choice.img}/>
        </section>
        <hr/>
        <section className="navtab">
                <ul>
                  {elements.map((el, index) => (
                    <li
                        key={el.key}
                        className='dot'
                        onClick={() => click(index)}
                        style={{ backgroundColor: index === choice.key ? 'white' : '#909090' }}
                    ></li>
                    ))}
                </ul>
        </section>
        <section className='staff'>
        <Staff
            key = {choice.key}
            role = {choice.role}
            name = {choice.name}
            text = {choice.text}
        ></Staff>
        </section>
      </section>  

      </>
    );
}
export default Crew
  