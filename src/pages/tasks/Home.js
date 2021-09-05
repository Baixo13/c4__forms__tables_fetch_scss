import './style.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import HomeForm from './components/HomeForm'
import HomeTable from './components/HomeTable'
import { useState } from 'react'
const API = "https://api-tasks.vercel.app/api"

const Home = () => {

    const [tasks, setTasks] = useState([])

    const getTasks = async () => {
        const res = await fetch(`${API}&/tasks`)
        const data = await res.json()
        setTasks(data)
    }

    return (
        <>
            <Navbar></Navbar>
            <main className="main">
                <HomeForm className="main__form"></HomeForm>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Home