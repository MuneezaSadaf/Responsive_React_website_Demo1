import './trainners.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/trainer1.jpg'
import {trainers} from '../../data'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import { FaFacebookF ,FaLinkedin } from 'react-icons/fa'

import Trainer from '../../components/Trainer'

const Trainners = () => {
  return (
    <>
    <Header title="Our Trainers" image={HeaderImage}> 
    animi corporis mollitia totam aspernatur doloremque sed voluptates quasi nemo vitae ab a temporibus nisi! 
    consolevoluptates quasi nemo vitae ab a temporibus nisi.
    </Header>
    <section className="trainers">
      <div className="container trainers__container">
        {
          trainers.map(({id,image,name, job, socials}) =>{
            return <Trainer key={id} image={image} name={name} job={job} socials={
              [
                {icon: <BsInstagram/>, link: socials[0]},
                {icon: <AiOutlineTwitter/>, link: socials[1]},
                {icon: <FaFacebookF/>, link: socials[2]},
                {icon: <FaLinkedin/>, link: socials[3]},

              ]
            }/>

          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainners