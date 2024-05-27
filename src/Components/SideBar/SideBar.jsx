import React from 'react'
import './SideBar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import Namiq from '../../assets/Namiq.png'
import Muku from '../../assets/Muku.png'
import Elvin from '../../assets/Elvin.png'
import riy from '../../assets/riy.png'
import isi from '../../assets/isi.png'

function SideBar({sidebar,category,setCategory}) {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="sortcut-links">
            <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                <img src={home} alt="" /><p>Home</p>
            </div>
           <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                <img src={game_icon} alt="" /><p>Gaming</p>
            </div>
           <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                <img src={automobiles} alt="" /><p>Automobiles</p>
            </div>
           <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                <img src={sports} alt="" /><p>Sports</p>
            </div>
           <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                <img src={entertainment} alt="" /><p>Entertainment</p>
            </div>
           <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                <img src={tech} alt="" /><p>Tecnology</p>
            </div>
           <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                <img src={music} alt="" /><p>Music</p>
            </div>
           <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                <img src={blogs} alt="" /><p>Blogs</p>
            </div>
           <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                <img src={news} alt="" /><p>News</p>
            </div>
            <hr />
            <div className="subscribed-list">
                <h3>Subscribed</h3>
                <div className="side-link">
                    <img src={Namiq} alt="" /><p>Java_Dunyasi</p>

                </div>
                <div className="side-link">
                    <img src={Muku} alt="" /><p>Advanced Java</p>

                </div>
                <div className="side-link">
                    <img src={Elvin} alt="" /><p>Hacker_Tv</p>

                </div>
                <div className="side-link">
                    <img src={riy} alt="" /><p>
BUders Boğaziçiliden Özel Ders</p>

                </div>
                <div className="side-link">
                    <img src={isi} alt="" /><p>Math with Isgender</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar