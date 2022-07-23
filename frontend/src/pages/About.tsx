import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Section from '../layouts/Section'

function About() {
    return (
        <>
            <Navbar />
            <Header />

            <Section id='about'>
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
                <img width='75%' src='img/m_banner.png' alt='' />
            </Section>

            <Section id='services'>
                <img width='75%' src='img/img--1.jpg' alt='' />
                <h1>FAST PRINTING</h1>
                <p>
                    A faster print usually means lower layer counts. This can lead to so undesirable
                    outcomes on certain models. This option is best used for quick prototyping or
                    non-aesthetic prints
                </p>
                <br />
                <br />
                <br />
                <br />
                <h1>STANDARD PRINTING</h1>
                <p>
                    Our standard print is the middle of the road in terms of speed to quality. With
                    this option, you may notice some artifacts, but they will be small and rare.
                    This option is most suitable for purely aesthetic models, or technical models
                    that do not require precision.
                </p>
                <img width='75%' src='img/img--2.jpg' alt='' />
                <img width='75%' src='img/img--3.jpg' alt='' />
                <h1>HIGH QUALITY PRINTING</h1>
                <p>
                    Our highest quality option. This option is highly desirable for functional
                    models that require precision. If you want the best looking print you can get,
                    this is it.
                </p>
            </Section>

            <Section id='contact'>
                <h3 className='heading mb-4'>{"Let's talk about everything!"}</h3>
                <p>
                    <img src='img/undraw-contact.svg' alt='Contact' className='img-fluid' />
                </p>
                <form className='mb-5' method='post' id='contactForm' name='contactForm'>
                    <input
                        type='text'
                        className='form-control'
                        name='f name'
                        id='f name'
                        placeholder='First name'
                    />
                    <input
                        type='text'
                        className='form-control'
                        name='l name'
                        id='l name'
                        placeholder='Last name'
                    />
                    <input
                        type='text'
                        className='form-control'
                        name='email'
                        id='email'
                        placeholder='Email'
                    />
                    <input
                        type='number'
                        className='form-control'
                        name='number'
                        id='number'
                        placeholder='Phone'
                    />
                    <input
                        type='text'
                        className='form-control'
                        name='subject'
                        id='subject'
                        placeholder='Subject'
                    />
                    <input
                        type='file'
                        className='form-control'
                        name='file'
                        id='file'
                        placeholder='Upload File'
                    />
                    <textarea
                        className='form-control'
                        name='message'
                        id='message'
                        cols={30}
                        rows={7}
                        placeholder='Write your Comments'
                    ></textarea>
                    <input
                        type='submit'
                        value='Send Message'
                        className='btn1 btn-primary rounded-0 py-2 px-4'
                    />
                    <span className='submitting'></span>
                </form>
            </Section>

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
