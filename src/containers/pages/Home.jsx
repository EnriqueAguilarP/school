import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import Header from "components/home/Header"
import Careers from "components/home/Careers"
import Languages from "components/home/Languages"
import Courses from "components/home/Courses"

function Home(){
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                <Header />
                <Careers />
                <Languages />
                <Courses />
            </div>
            <Footer />
        </Layout>
    )
}

export default Home