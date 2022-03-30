import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

// Image Imports!
import HeaderImg from '../assets/header/clean.jpg';
import About1 from '../assets/about/about1.png';
import About2 from '../assets/about/about2.png';
import About3 from '../assets/about/about3.png';
import Testimonial1 from '../assets/testimonials/testimonial1.jpg';
import Testimonial2 from '../assets/testimonials/testimonial2.jpg';
import Testimonial3 from '../assets/testimonials/testimonial3.jpg';

export default function Home() {

    const Header = () => {
        return (
            <div>
                <div id="header" className="columns is-vcentered">
                    <div className="column is-one-third is-centered m-6">
                        <div className="title is-1 p-2">
                            Life's Busy, <br /> Let Us Help
                        </div>
                        <div className="subtitile is-5 p-2">
                            Your home will be cleaned to your higest expectations by trained professionals at surprisingly affordable rates. Your home and your priorities. We take pride in providing cleaning services that match your needs and your budget. It is time to discover the magic of Sparkling Spaces.
                        </div>
                        <Link to='login'><button className="button is-warning is-rounded ">Login to Schedule</button></Link>
                    </div>
                    <div className="column is-two-thirds is-centered">
                        <figure className="image is-5by3 m-6">
                            <img src={HeaderImg} alt="cleaning supplies" />
                        </figure>
                    </div>
                </div>
                <hr />
            </div>

        )
    }

    const About = () => {
        return (
            <div id="about" className="section is-small has-text-centered">
                <div className='title is-2 has-text-centered'>
                    Sparkling Spaces provides residential <br /> cleaning services to the Orlando, FL area!
                </div>
                <div className="columns is-mobile is-vcentered">
                    <div className='column is-one-third is-centered has-text-centered'>
                        <figure className="image is-128x128 is-inline-block m-4">
                            <img src={About1} alt="cleaning supplies" />
                        </figure><br />
                        <div className='title is-4 m-3'>We Supply Everything</div><br />
                        <div className='subtitle is-5'>No hassle or extra charges</div>
                    </div>
                    <div className='column is-one-third is-centered has-text-centered'>
                        <figure className="image is-128x128 is-inline-block m-4">
                            <img src={About2} alt="people mopping" />
                        </figure><br />
                        <div className='title is-4 m-3'>Reliable Staff</div><br />
                        <div className='subtitle is-5'>Our maids put your home first</div>
                    </div>
                    <div className='column is-one-third is-centered has-text-centered'>
                        <figure className="image is-128x128 is-inline-block m-4">
                            <img src={About3} alt="three stars" />
                        </figure><br />
                        <div className='title is-4 m-3'>Best Rated in Orlando</div><br />
                        <div className='subtitle is-5'>Featured in Good Homes 2020</div>
                    </div>
                </div>
            </div>
        )
    }

    const Rates = () => {
        return (
            <div>
                <div id="rates" className="section is-small has-text-centered">
                    <hr />
                    <div className='title is-2 has-text-centered p-3 m-3'>Rates</div><br />
                    <div className='subtitle is-5 has-text-centered m-3'>
                        Price is an accurate estimate based on standard scope of work. Upon booking, a maid will work with you <br />
                        to create a custom-made cleaning list to make sure your priorities are met.
                    </div>
                    <div className='title is-3 has-text-centered'>Average Cleaning Times:</div><br />
                    <div className='subtitle is-5 has-text-centered'>
                        2 Hours: 1-2 Bedrooms <br />4 Hours: 2-3 Bedrooms<br />6 Hours: 3-4 Bedrooms
                    </div>
                    <div className='subtitle is-5 has-text-centered'>
                        Our rates are an estimate and may vary depending upon consultation to ensure we meet your expectations. <br />
                        Currently we are only doing 2-Hour appointments for 99$. <br />
                    </div>
                </div>
                <hr />
            </div>

        )
    }

    const Testimonials = () => {
        return (
            <div id="testimonials" className="section is-small has-background-white has-text-centered mb-6">
                <div className='title is-2 has-text-centered'>
                    What Our Customers Say
                </div><br />
                <div className='subtitle is-5 has-text-centered m-3'>
                    Our staff is committed to quality cleaning services. After each cleaning, clients can rate their service to share with others. Our unique approach allows users to view their provider's rating before booking their appointment. This performance-based approach encourages excellence and is the primary reason that we are one of the top-rated cleaning services in Orlando.
                </div>
                <div className="columns is-mobile is-vcentered">
                    <div className='column is-one-third is-centered has-text-centered'>
                        <figure className="is-inline-block m-3">
                            <img src={Testimonial1} alt="cleaning supplies" className='about-height' />
                        </figure>
                        <div className='subtitle is-5'>My living room has never been this clean!</div>
                        <div className='title is-4'>John Smith</div>
                    </div>
                    <div className='column is-one-third is-centered has-text-centered'>
                        <figure className="is-inline-block m-3">
                            <img src={Testimonial2} alt="people mopping" className='about-height' />
                        </figure>
                        <div className='subtitle is-5'>My bathroom has never been this clean!</div>
                        <div className='title is-4'>Susie Q</div>
                    </div>
                    <div className='column is-one-third is-centered has-text-centered'>
                        <figure className="is-inline-block m-3">
                            <img src={Testimonial3} alt="three stars" className='about-height' />
                        </figure>
                        <div className='subtitle is-5'>My bedroom has never been this clean!</div>
                        <div className='title is-4'>John Smith</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id="landing-body">
            <Header />
            <About />
            <Rates />
            <Testimonials />
        </div>
    )

}