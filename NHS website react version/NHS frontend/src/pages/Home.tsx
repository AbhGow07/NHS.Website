import {useState} from "react"

const Home = () => {
    const [variable, setVariable] = useState<string>("hiii");
    return (
        <main>
            <h1>Home</h1>
        {variable}
        </main>
    )
}

export default Home;