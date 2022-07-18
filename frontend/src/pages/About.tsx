import './About.css'
import './bootstrap.css'

import Navbar from '../components/Navbar'

function About() {
    return (
        <>
            <Navbar />
            <header
                className='masthead bg-primary text-white text-center'
                style={{ position: 'relative' }}
            >
                <div className='container d-flex align-items-center flex-column custom-p-5'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h2 className='text-secondary h-t-style'>Dimension Cubed</h2>
                        </div>
                        <div className='col-md-12'></div>
                    </div>
                </div>
            </header>

            <section id='about' className='sec-padding'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <div className='about-section'>
                                <h1>About us</h1>
                                <p>
                                    {
                                        "At Dimension3, you won't only find what you need; you'll get\
                                    the best quality at a fair price. With years of experience in\
                                    the industry, we have the expertise to thoroughly and\
                                    efficiently serve our customers to ensure they're never\
                                    disappointed."
                                    }
                                </p>
                                <p>
                                    {
                                        "Whether you're a one-time buyer or looking to buy in bulk, you\
                                    can count on us to provide great products and excellent service,\
                                    every step of the way. Browse our inventory below and get in\
                                    touch if you can't find what you're looking for."
                                    }
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='about-section'>
                                <div className='sec-img1-position'>
                                    <img width='75%' src='img/m_banner.png' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='Services' style={{ background: '#e4e4e5' }} className='sec-padding'>
                <div id='Services' className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <div className='about-section'>
                                <div className='sec-img2-position'>
                                    <img width='75%' src='img/img--1.jpg' alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='about-section'>
                                <h1>FAST PRINTING</h1>
                                <p>
                                    A faster print usually means lower layer counts. This can lead
                                    to so undesirable outcomes on certain models. This option is
                                    best used for quick prototyping or non-aesthetic prints
                                </p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <div className='about-section'>
                                <h1>STANDARD PRINTING</h1>
                                <p>
                                    Our standard print is the middle of the road in terms of speed
                                    to quality. With this option, you may notice some artifacts, but
                                    they will be small and rare. This option is most suitable for
                                    purely aesthetic models, or technical models that do not require
                                    precision.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='about-section'>
                                <div className='sec-img3-position'>
                                    <img width='75%' src='img/img--2.jpg' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <div className='about-section'>
                                <div className='sec-img4-position'>
                                    <img width='75%' src='img/img--3.jpg' alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='about-section'>
                                <h1>HIGH QUALITY PRINTING</h1>
                                <p>
                                    Our highest quality option. This option is highly desirable for
                                    functional models that require precision. If you want the best
                                    looking print you can get, this is it.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='contact'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='content'>
                                <div className='container'>
                                    <div className='row justify-content-center'>
                                        <div className='col-md-10'>
                                            <div className='row justify-content-center'>
                                                <div className='col-md-6'>
                                                    <h3 className='heading mb-4'>
                                                        {"Let's talk about everything!"}
                                                    </h3>
                                                    <p>
                                                        <img
                                                            src='img/undraw-contact.svg'
                                                            alt='Contact'
                                                            className='img-fluid'
                                                        />
                                                    </p>
                                                </div>
                                                <div className='col-md-6'>
                                                    <form
                                                        className='mb-5'
                                                        method='post'
                                                        id='contactForm'
                                                        name='contactForm'
                                                    >
                                                        <div className='row'>
                                                            <div className='col-md-12 form-group'>
                                                                <input
                                                                    type='text'
                                                                    className='form-control'
                                                                    name='f name'
                                                                    id='f name'
                                                                    placeholder='First name'
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-md-12 form-group'>
                                                                <input
                                                                    type='text'
                                                                    className='form-control'
                                                                    name='l name'
                                                                    id='l name'
                                                                    placeholder='Last name'
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-md-12 form-group'>
                                                                <input
                                                                    type='text'
                                                                    className='form-control'
                                                                    name='email'
                                                                    id='email'
                                                                    placeholder='Email'
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-md-12 form-group'>
                                                                <input
                                                                    type='number'
                                                                    className='form-control'
                                                                    name='number'
                                                                    id='number'
                                                                    placeholder='Phone'
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-md-12 form-group'>
                                                                <input
                                                                    type='text'
                                                                    className='form-control'
                                                                    name='subject'
                                                                    id='subject'
                                                                    placeholder='Subject'
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-md-12 form-group'>
                                                                <input
                                                                    type='file'
                                                                    className='form-control'
                                                                    name='file'
                                                                    id='file'
                                                                    placeholder='Upload File'
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-md-12 form-group'>
                                                                <textarea
                                                                    className='form-control'
                                                                    name='message'
                                                                    id='message'
                                                                    cols={30}
                                                                    rows={7}
                                                                    placeholder='Write your Comments'
                                                                ></textarea>
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-12'>
                                                                <input
                                                                    type='submit'
                                                                    value='Send Message'
                                                                    className='btn1 btn-primary rounded-0 py-2 px-4'
                                                                />
                                                                <span className='submitting'></span>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <div id='form-message-warning mt-4'></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className='footer text-center'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 mb-5 mb-lg-0'>
                            <div className='footer-logo'>
                                <img
                                    width='50%'
                                    src='img/Dimension_Cubed-Roundal_Logo.png'
                                    alt=''
                                />
                            </div>
                        </div>

                        <div className='col-lg-4 mb-5 mb-lg-0'>
                            <h3>About us</h3>
                            <br />
                        </div>

                        <div className='col-lg-4'>
                            <h3>Contact us</h3>
                            <div className='footer-logo'>
                                <div className='btn btn-social mx-1 c_btn'>
                                    <i
                                        className='fab fa-fw fa-facebook-f'
                                        aria-label='facebook'
                                    ></i>
                                </div>
                                <div className='btn btn-social mx-1 c_btn'>
                                    <i className='fab fa-fw fa-twitter' aria-label='twitter'></i>
                                </div>
                                <div className='btn btn-social mx-1 c_btn'>
                                    <i className='fab fa-fw fa-reddit' aria-label='reddit'></i>
                                </div>
                                <div className='btn btn-social mx-1 c_btn'>
                                    <i className='fab fa-fw fa-discord' aria-label='discord'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className='copyright py-4 text-center text-white'>
                <div className='container'>
                    <small>
                        ©Copyright Dimension Cubed | Printing Services 2022. All Right Reserve
                    </small>
                </div>
            </div>
        </>
    )
}

export default About
