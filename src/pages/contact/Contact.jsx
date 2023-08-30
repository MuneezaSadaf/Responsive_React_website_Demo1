import './contact.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'


const Contact = () => {
  return (
    <>
    <Header title='Get In Touch' image={HeaderImage}>
      <p>
        Furga itaque duciamus, ad amet praesentium suscipit sit, assumenda nihil officia totam, animi culpa nobis nemo natus doloremque?
      </p>
    </Header>
    <section className='contact'>
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:muneezasadaf2716@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
          <a href="https://www.facebook.com/" target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
          <a href="https://web.whatsapp.com/" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>

        </div>
      </div>
    </section>


    </>

    )
}

export default Contact