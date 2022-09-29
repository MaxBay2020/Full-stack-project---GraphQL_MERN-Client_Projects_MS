import Clients from "../components/Clients";
import Projects from "../components/Projects";

const HomePage = () => {
    return (
        <div className='container'>
            <Projects />
            <hr/>
            <Clients />
        </div>
    )
}

export default HomePage
