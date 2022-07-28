import Contact from '../components/Contact'
import Header from '../components/Header'
import ImageTextPair from '../layouts/ImageTextPair'
import Section from '../layouts/Section'
import Trifold from '../layouts/Trifold'

function About() {
    return (
        <>
            <Header />

            <Section id='about' title='About D3'>
                <ImageTextPair img='img/m_banner.png'>
                    <>
                        <p>
                            At Dimension3, you won&apos;t only find what you need; you&apos;ll get
                            the best quality at a fair price. With years of experience in the
                            industry, we have the expertise to thoroughly and efficiently serve our
                            customers to ensure they&apos;re never disappointed.
                        </p>
                        <p>
                            Whether you&apos;re a one-time buyer or looking to buy in bulk, you can
                            count on us to provide great products and excellent service, every step
                            of the way. Browse our inventory below and get in touch if you
                            can&apos;t find what you&apos;re looking for.
                        </p>
                    </>
                </ImageTextPair>
            </Section>

            <Section id='services'>
                <Trifold
                    panel1={
                        <>
                            <h3>1</h3>
                            <p>Arbitrary text</p>
                        </>
                    }
                    image1='img/img--1.jpg'
                    panel2={
                        <>
                            <h3>2</h3>
                            <p>Arbitrary text</p>
                        </>
                    }
                    image2='img/img--2.jpg'
                    panel3={
                        <>
                            <h3>3</h3>
                            <p>Arbitrary text</p>
                        </>
                    }
                    image3='img/img--3.jpg'
                />
            </Section>

            <Section id='contact' title='Contact'>
                <Contact></Contact>
            </Section>

            <div className='copyright py-4 text-center text-white'>
                <div className='container'></div>
            </div>
        </>
    )
}

export default About
