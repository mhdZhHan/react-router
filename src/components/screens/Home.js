import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    return(
        <>
            <h1>Home Page</h1>
            <h3 onClick={()=>navigate('/contact')}>Click me to go Contact page</h3>
        </>
    )
}

export default Home
