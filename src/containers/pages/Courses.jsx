import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"

function Courses(){
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                Courses
            </div>
            <Footer />
        </Layout>
    )
}

export default Courses