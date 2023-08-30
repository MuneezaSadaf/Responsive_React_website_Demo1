import './about.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import VisionImage from '../../images/about2.jpg'
import StoryImage from '../../images/about1.jpg'
import MissionImage from '../../images/about3.jpg'


const About = () => {
  return (
    <>
    <Header title='About us' image={HeaderImage}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor minus amet fuga sed est a incidunt 
      voluptatem laboriosam quo aspernatur dicta delectu?
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt='Our Story Image'/>
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit officiis soluta incidunt nam tempore aspernatur non sed consequuntur? Incidunt, veritatis fuga! Ipsa, voluptate optio.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor minus amet fuga sed est a incidunt 
                voluptatem laboriosam quo aspernatur dicta delectu? Deserunt eos quidem soluta tempore corporis.
                </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor minus amet fuga sed est a incidunt 
              voluptatem laboriosam quo aspernatur dicta delectu?
              </p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor minus amet fuga sed est a incidunt
              </p>
          </div>
        </div>

      </section>
      <section className="about__Vision">
        <div className="container about__Vision-container">
          
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit officiis soluta incidunt nam tempore aspernatur non sed consequuntur? Incidunt, veritatis fuga! Ipsa, voluptate optio.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor minus amet fuga sed est a incidunt 
                voluptatem laboriosam quo aspernatur dicta delectu? Deserunt eos quidem soluta tempore corporis.
                </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor minus amet fuga sed est a incidunt 
              voluptatem laboriosam quo aspernatur dicta delectu?
              </p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor minus amet fuga sed est a incidunt
              </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt='Our Vision Image'/>
          </div>
        </div>

      </section>

      <section className="about__missio">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt='Our Mission Image'/>
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit officiis soluta incidunt nam tempore aspernatur non sed consequuntur? Incidunt, veritatis fuga! Ipsa, voluptate optio.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor minus amet fuga sed est a incidunt 
                voluptatem laboriosam quo aspernatur dicta delectu? Deserunt eos quidem soluta tempore corporis.
                </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor minus amet fuga sed est a incidunt 
              voluptatem laboriosam quo aspernatur dicta delectu?
              </p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor minus amet fuga sed est a incidunt
              </p>
          </div>
        </div>

      </section>
      
      </>
    )
}

export default About