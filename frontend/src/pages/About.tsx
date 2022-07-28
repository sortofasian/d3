import Contact from '../components/Contact'
import Header from '../components/Header'
import Section from '../layouts/Section'

function About() {
    return (
        <>
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
                <Contact />
            </Section>

            <div className='copyright py-4 text-center text-white'>
                <div className='container'></div>
            </div>
        </>
    )
}

export default About
