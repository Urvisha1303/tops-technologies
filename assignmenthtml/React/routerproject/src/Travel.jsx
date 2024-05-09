import React from 'react'
import './Travel.css'
import s2 from '../src/image/slider2.jpg'
import s4 from '../src/image/slider4.jpg'
import g1 from '../src/image/g1.jpg'
import g2 from '../src/image/g2.jpg'
import g3 from '../src/image/g3.jpg'
import g4 from '../src/image/g4.jpg'
import g5 from '../src/image/g5.jpg'
import g6 from '../src/image/g6.jpg'
import t1 from '../src/image/t1.jpg'
import t2 from '../src/image/t2.jpg'
import t3 from '../src/image/t3.jpg'
import t4 from '../src/image/t4.jpg'
import t5 from '../src/image/t5.jpg'
import t6 from '../src/image/t6.jpg'
const Travel = () => {
  return (
<>
        <div className="header_red">
            <div className="header_part">
                <div className="logo">
                    <h1>Str<i className="fa-solid fa-earth-asia" style={{color:"#F2C532"}}></i>ll</h1>
                </div>
                <div className="header_content">
                    <ul className="header_ul">
                        <li><a href="">Home</a></li>
                        <li><a href="">about</a></li>
                        <li><a href="">destination</a></li>
                        <li className="blog_header"><a href="">blog</a> <i className="fa-solid fa-angle-down fa-2xs"></i>
                            <div className="blog_header_ul">
                                <ul>
                                    <li>Blog</li>
                                    <li>blog single</li>
                                    <li>lading page</li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="">contact</a></li>
                    </ul>
                    <div className="header_content_bar_menu">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="main_slider">
            <div className="slider1">
                <div className="slider_left_right">
                    <div className="slider_left">
                        <div className="slider_left_content">
                            <h4>Mountain holiday</h4>
                            <h1>explore your travel <span>destinations</span></h1>
                            <p>enjoy the best destinations with our travel agency</p>
                            <button><a href="">Read More</a></button>
                        </div>
                    </div>
                    <div className="slider_right">
                        <div className="slider_right_img"></div>
                    </div>
                </div>
            </div>
            <div className="slider2">
                <div className="slider_left_right">
                    <div className="slider_left">
                        <div className="slider_left_content">
                            <h4>Mountain holiday</h4>
                            <h1>enjoy your dream <span>vacation</span></h1>
                            <p>enjoy the best destinations with our travel agency</p>
                            <button><a href="">Read More</a></button>
                        </div>
                    </div>
                    <div className="slider_right">
                        <img src={s2} alt="" />
                    </div>
                </div>
            </div>
            <div className="slider3">
                <div className="slider_left_right">
                    <div className="slider_left">
                        <div className="slider_left_content">
                            <h4>Balloon filghts</h4>
                            <h1>enjoy your dream <span>vacation</span></h1>
                            <p>enjoy the best destinations with our travel agency</p>
                            <button><a href="">Read More</a></button>
                        </div>
                    </div>
                    <div className="slider_right">
                        <img src="image\slider3.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="slider4">
                <div className="slider_left_right">
                    <div className="slider_left">
                        <div className="slider_left_content">
                            <h4>Mountain holiday</h4>
                            <h1>explore your travel <span>destinations</span></h1>
                            <p>enjoy the best destinations with our travel agency</p>
                            <button><a href="">Read More</a></button>
                        </div>
                    </div>
                    <div className="slider_right">
                        <img src={s4} alt=""/>
                    </div>
                </div>
            </div>

        </div>
        <div className="infromation_content">
            <div className="infro_mr_ml">
                <div className="cruises_content">
                    <div className="cruises_content_logo">
                        <i className="fa-solid fa-earth-oceania"></i>
                    </div>
                    <h2> Voyages & Cruises</h2>
                    <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</p>
                </div>
                <div className="cruises_content">
                    <div className="cruises_content_logo">
                        <i className="fa-solid fa-bed"></i>
                    </div>
                    <h2>Hotel Bookings</h2>
                    <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</p>
                </div>
                <div className="cruises_content">
                    <div className="cruises_content_logo">
                        <i className="fa-solid fa-plane-departure"></i>
                    </div>
                    <h2>Air Tickets</h2>
                    <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</p>
                </div>
                <div className="cruises_content">
                    <div className="cruises_content_logo">
                        <i className="fa-regular fa-file-lines"></i>
                    </div>
                    <h2>Visas</h2>
                    <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</p>
                </div>

            </div>
        </div>
        <div className="gallery_content">
            <div className="gallery_ml_mr">
                <div className="title_content">
                    <div className="sub_title">
                        <div className="redline"></div>
                    </div>
                    <h2>Hot tours</h2>
                </div>
                <h1>Popular Packages</h1>
                <div className="gallery_content_row">
                    <div className="gallery_slide_grid">
                        <div className="gallery_slide_img">
                            <a href="#"><img src={g1}alt="paris img" /></a>
                        </div>
                        <div className="gallery_slide_info">
                            <h4 style={{color: "white"}}>Paris</h4>
                            <h6 style={{color:"aliceblue"}}>3Days, 4 Nights Start From <span>$750</span></h6>
                        </div>
                    </div>
                    <div className="gallery_slide_grid">
                        <div className="gallery_slide_img">
                            <a href="#"><img src={g2} alt="paris img"/></a>
                        </div>
                        <div className="gallery_slide_info">
                            <h4 style={{color: "white"}}>Bankok</h4>
                            <h6 style={{color:"aliceblue"}}>3Days, 3 Nights Start From <span>$650</span></h6>
                        </div>
                    </div>
                    <div className="gallery_slide_grid">
                        <div className="gallery_slide_img">
                            <a href="#"><img src={g3} alt="paris img"/></a>
                        </div>
                        <div className="gallery_slide_info">
                            <h4 style={{color: "white"}}>Maldivas</h4>
                            <h6 style={{color:"aliceblue"}}>3Days, 3 Nights Start From <span>$550</span></h6>
                        </div>
                    </div>
                    <div className="gallery_slide_grid">
                        <div className="gallery_slide_img">
                            <a href="#"><img src={g4} alt="paris img"/></a>
                        </div>
                        <div className="gallery_slide_info">
                            <h4 style={{color: "white"}}>Greece</h4>
                            <h6 style={{color:"aliceblue"}}>3Days, 4 Nights Start From <span>$950</span></h6>
                        </div>
                    </div>
                    <div className="gallery_slide_grid">
                        <div className="gallery_slide_img">
                            <a href="#"><img src={g5} alt="paris img"/></a>
                        </div>
                        <div className="gallery_slide_info">
                            <h4 style={{color: "white"}}>London</h4>
                            <h6 style={{color:"aliceblue"}}>3Days, 3 Nights Start From <span>$550</span></h6>
                        </div>
                    </div>
                    <div className="gallery_slide_grid">
                        <div className="gallery_slide_img">
                            <a href="#"><img src={g6} alt="paris img"/></a>
                        </div>
                        <div className="gallery_slide_info">
                            <h4 style={{color: "white"}}>Julian Alps</h4>
                            <h6 style={{color:"aliceblue"}}>3Days, 4 Nights Start From <span>$850</span></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="content_photo_booking">
            <div className="photo_ml_mr">
                <div className="content_photo">
                    <video controls width="100%" >
                        <source src="image\pexels_videos_2734194 (2160p).mp4" type="video/mp4"/>
                        <button style={{width: "100px",height: "500px",color: "aliceblue"}}><i
                                className="fa-solid fa-play"></i></button>
                    </video>
                </div>
                <div className="content_photo_content">
                    <div className="content_photo_content_left">
                        <div className="redline_left">
                            <div className="sub_title">
                                <div className="redline"></div>
                            </div>
                            <h2>Short Video</h2>
                        </div>
                        <h1>Find Your Perfect Vacation</h1>
                    </div>
                    <div className="content_photo_content_right">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio voluptatem
                            tenetur consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                            hic odio voluptatem tenetur consequatur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div className="booking_form_content">
                    <div className="booking_offer">
                        <div className="sub_title">
                            <div className="redline"></div>
                        </div>
                        <h2>10-30% Off</h2>
                    </div>
                    <h1>Book Now</h1>
                </div>
                {/* <div className="booking-form">
                    <div className="row-form">
                        <label>Name</label>
                        <input type="text" placeholder="Name/>
                    </div>
                    <div className="row-form1">
                        <label>Destination</label>
                        <select name="Any">
                            <option value="">Any</option>
                            <option value="">Africa</option>
                            <option value="">America</option>
                            <option value="">Asia</option>
                            <option value="">Eastern Europe</option>
                            <option value="">Europe</option>
                            <option value="">South America</option>

                        </select>
                    </div>
                    <div className="row-form">
                        <label>Activity</label>
                        <select name="Any">
                            <option>Any</option>
                            <option>City Tours</option>
                            <option>Cultural & Thematic Tours</option>
                            <option>Family Friendly Tours</option>
                            <option>Holiday & Seasonal Tours</option>
                            <option>Indulgence & Luxury Tours</option>
                            <option>Outdoor Activites</option>
                            <option>Relaxation Tours</option>
                            <option>Wild & Adventure Tours</option>

                        </select>
                    </div>
                    <div className="row-form">
                        <label>Duration</label>
                        <select name="Any">
                            <option>Any</option>
                            <option>1 Day Tour</option>
                            <option>2-4 Days Tour</option>
                            <option>5-7 Days Tour</option>
                            <option>7+ Days Tour</option>
                        </select>
                    </div>
                    <div className="row-form">
                        <label>Date</label>
                        <input type="date" value=""/>
                    </div>
                    <div className="row-form row-form-input">
                        <label> Submit</label>
                        <input type="button" value="Submit"/>
                    </div>
                </div> */}
            </div>
        </div>
        
    </>
  )
}

export default Travel