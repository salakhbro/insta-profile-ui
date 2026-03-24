import React from "react";
// icons
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { FiGrid } from "react-icons/fi";
import { BsPlay } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { IoMdHome } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BiSolidMoviePlay } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
// img
import Galochka from '../../assets/img/galochka.png'
import Avatar from '../../assets/img/avatar.png'
import Lamp from '../../assets/img/lamp.png'
import Bag from '../../assets/img/bag.png'
import Four from '../../assets/img/four.png'
import Click from '../../assets/img/click.png'
import Notebook from '../../assets/img/notebook.png'
import Code from '../../assets/img/post(code).png'
import Post from '../../assets/img/Post (1).png'
import App from '../../assets/img/Post (2).png'
import HalfNotebook from '../../assets/img/Post (3).png'
import Email from '../../assets/img/Post (4).png'
import PostLesson from '../../assets/img/Post (5).png'
import PostJob from '../../assets/img/Post (6).png'
import Phones from '../../assets/img/Post (7).png'
import PostEight from '../../assets/img/Post (8).png'
import PostSeo from '../../assets/img/Post (9).png'
import ClickSettings from '../../assets/img/Post (10).png'
import CodeWeb from '../../assets/img/Post (11).png'
import PostFlower from '../../assets/img/Post (12).png'
import Camera from '../../assets/img/Post (13).png'
import Keyboard from '../../assets/img/Post (14).png'
import World from '../../assets/img/Post (15).png'
import Caffe from '../../assets/img/Post (16).png'
import ProfileInstagram from '../../assets/img/profile.png'
import "./Pagina.css";
import { Link } from "react-router-dom"

function Profile() {
    return (
        <div className="profile">
            <div className="top-bar">
                <IoIosArrowBack className="back" />
                <h3>codefive</h3>
                <img src={Galochka} style={{ marginLeft: "-60px" }} alt="this is a galochka" />
                <CiBellOn className="bell" />
                <span className="menu">⋯</span>
            </div>

            <div className="profile-info">
                <Link className="imgs" to="/stories"><img src={Avatar} className="avatar" alt="this is a avatar" /></Link>
                <div className="stats">
                    <div>
                        <h4>6956</h4>
                        <p>Posts</p>
                    </div>
                    <div>
                        <h4>27.7M</h4>
                        <p>Followers</p>
                    </div>
                    <div>
                        <h4>219</h4>
                        <p>Following</p>
                    </div>
                </div>
            </div>

            <div className="bio">
                <h4>Codefive</h4>
                <p style={{ color: "#ccc" }}>Agency</p>
                <p>O seu site de sonhos, está no sitio certo. 💻</p>
                <a href="#">codefive.pt</a>
            </div>

            <div className="buttons">
                <button className="follow">Follow</button>
                <button className="message">Message</button>
                <button className="contact">Contact</button>
                <div className="user-plus"><AiOutlineUserAdd className="users" /></div>
            </div>

            <section className="container">
                <div className="box">
                    <img src={Lamp} alt="this is a picture" />
                    <h6 className="design">Design,Tips</h6>
                </div>
                <div className="box">
                    <img src={Bag} alt="this is a picture" />
                    <h6 className="design">Portfolios</h6>
                </div>
                <div className="box">
                    <img src={Four} alt="this is a picture" />
                    <h6 className="design">Resources</h6>
                </div>
                <div className="box">
                    <img src={Click} alt="this is a picture" />
                    <h6 className="design">UI Basics</h6>
                </div>
            </section>

            <div className="top-icons">
                <FiGrid className="active" />
                <BsPlay />
                <FiUser />
            </div>
            <section>
                <div className="galareya">
                    <img src={Notebook} alt="this is a picture" />
                    <img src={Code} alt="this is a picture" />
                    <img src={Post} alt="this is a picture" />
                </div>
                <div className="galareya">
                    <img src={App} alt="this is a picture" />
                    <img src={HalfNotebook} alt="this is a picture" />
                    <img src={Email} alt="this is a picture" />
                </div>
                <div className="galareya">
                    <img src={PostLesson} alt="this is a picture" />
                    <img src={PostJob} alt="this is a picture" />
                    <img src={Phones} alt="this is a picture" />
                </div>
                <div className="galareya">
                    <img src={PostEight} alt="this is a picture" />
                    <img src={PostSeo} alt="this is a picture" />
                    <img src={ClickSettings} alt="this is a picture" />
                </div>
                <div className="galareya">
                    <img src={CodeWeb} alt="this is a picture" />
                    <img src={PostFlower} alt="this is a picture" />
                    <img src={Camera} alt="this is a picture" />
                </div>
                <div className="galareya">
                    <img src={Keyboard} alt="this is a picture" />
                    <img src={World} alt="this is a picture" />
                    <img src={Caffe} alt="this is a picture" />
                </div>
            </section>
            <footer className="footer">
                <div className="footer-icons">
                    <IoMdHome />
                    <CiSearch />
                    <BiSolidMoviePlay />
                    <CiHeart />
                </div>
                <img src={ProfileInstagram} className="profile-image" alt="tjhis is a picture" />
            </footer>
        </div>
    );
}

export default Profile;