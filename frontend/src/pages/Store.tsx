import { useState } from 'react'

import Modal from '../components/Modal'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import Grid from '../layouts/Grid'

function Store() {
    const [modalVisible, setModal] = useState(false)
    return (
        <>
            <Modal visible={modalVisible} setVisible={setModal} />
            <Navbar />
            <br />
            <Grid>
                <Product title='Dragon' image='/img/dragon.jpg' setModal={setModal} />
                <Product title='Dragon' image='/img/dragon.jpg' setModal={setModal} variant='2x1' />
                <Product title='Dragon' image='/img/dragon.jpg' setModal={setModal} />
                <Product title='Dragon' image='/img/dragon.jpg' setModal={setModal} />
                <Product title='Dragon' image='/img/dragon.jpg' setModal={setModal} variant='2x2' />
                <Product title='Dragon' image='/img/dragon.jpg' setModal={setModal} />
                <Product title='Dragon' image='/img/dragon.jpg' setModal={setModal} />
                <Product title='Dragon' image='/img/dragon.jpg' setModal={setModal} />
            </Grid>
        </>
    )
}

export default Store
