import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {TbUsers} from 'react-icons/tb'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='About'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <img src={ME} alt="About Image" />
        </div>

      <div className='about_content'>
        <div className='about_cards'>
          <article className='about_card'>
            <FaAward className='about_icon' />
            <h5>Experience</h5>
            <small>Fresher</small>
          </article>

          <article className='about_card'>
            <TbUsers className='about_icon' />
            <h5>Clients</h5>
            <small>10+</small>
          </article>

          <article className='about_card'>
            <VscFolderLibrary className='about_icon' />
            <h5>Projects</h5>
            <small>20+</small>
          </article>
        </div>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis commodi sint, quisquam deleniti soluta molestias, magni, accusamus ad quam similique unde. Ab architecto voluptatum est eos tempora necessitatibus harum soluta.</p>
        <a href='#Contact' className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default about