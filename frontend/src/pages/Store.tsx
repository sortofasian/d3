import Product from '../components/Product'
import Grid from '../layouts/Grid'

function Store() {
    return (
        <Grid>
            <Product />
            <Product variant='2x1' />
            <Product />
            <Product />
            <Product variant='2x2' />
            <Product />
            <Product />
            <Product />
        </Grid>
    )
}

export default Store
