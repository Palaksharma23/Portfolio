import React from 'react'
import { Link } from 'react-router-dom';
import homeAnime from './girlworkingagain.jpg';
import './Home.css'
function Home() {
  return (
    <div><div className='home-container'>
    {/* {this.state.showModal && <Modal closeModal={this.closeModal} />}  */}
       <div className='header-text'>
           <h1>Welcome to my portfolio!</h1>
           <p>I am Palak Sharma, a full stack web developer, Open-Source Enthusiast, Coder, Youtuber and Chef ❤</p>
       </div>
       <div className='head-btns'>
           <Link to='/about' className='btn btn-white'>
               <p className='btn-text'>Know more about me</p>
           </Link>
           <Link to='/contact' className='btn btn-transparent'>
               <p className='btn-text'>Connect with me</p>
           </Link>
       </div>
       <div className='splash-image'>
           <img
               src={homeAnime}
               alt='animation'
               className='home-anime'
           />
       </div>
   </div></div>
  )
}

export default Home