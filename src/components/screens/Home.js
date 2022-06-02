import Helmet from 'react-helmet'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    return(
        <>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <h1>Home Page</h1>
            <h3 onClick={()=>navigate('/contact')}>Click me to go Contact page</h3>
        </>
    )
}

export default Home
