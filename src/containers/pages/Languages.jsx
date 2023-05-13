import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"

function Languages(){
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                Languages
            </div>
            <Footer />
        </Layout>
    )
}

export default Languages