import Menu from './Menu'
import Staff from './Staff';
import { useEffect, useState } from 'react';
import mobile from './../assets/img/technology/background-technology-mobile.jpg'
import tablet from './../assets/img/technology/background-technology-tablet.jpg'
import desktop from './../assets/img/technology/background-technology-desktop.jpg'

const Tech = () => {
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const setBodyBackground = () => {
      if (window.innerWidth > 600 && window.innerWidth < 900) { 
        setIsWide(false);
        document.body.style.backgroundImage = `url('${tablet}')`;
      } else if (window.innerWidth >= 900) { 
        setIsWide(true);
        document.body.style.backgroundImage = `url('${desktop}')`;
      } else { 
        setIsWide(false);
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
        key: 0,
        title: "Launch vehicle",
        text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        img1: './src/assets/img/technology/image-launch-vehicle-landscape.jpg',
        img2: './src/assets/img/technology/image-launch-vehicle-portrait.jpg'
      },
      {
        key: 1,
        title: "Spaceport",
        text: " spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        img1: './src/assets/img/technology/image-spaceport-landscape.jpg',
        img2: './src/assets/img/technology/image-spaceport-portrait.jpg'
      },
      {
        key: 2,
        title: "Space capsule",
        text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        img1: './src/assets/img/technology/image-space-capsule-landscape.jpg',
        img2: './src/assets/img/technology/image-space-capsule-portrait.jpg'
      }
    ];
    const [choice, setChoice] = useState(elements[0]);
    const click = (i) => {
      setChoice(elements[i]);
    };
    return (
      <>
      <Menu></Menu>
      <section className='homepage crew tech'>
        <h4 className='meet'><span className="bold fade">03</span> Space launch 101</h4>
        <img src = {isWide ? choice.img2 : choice.img1 }/>
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
        <h5>the terminology...</h5>
        <Staff
            key = {choice.key}
            name = {choice.title}
            text = {choice.text}
        ></Staff>
      </section>
     
      </>
    );
}
export default Tech