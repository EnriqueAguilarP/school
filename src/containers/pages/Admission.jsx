import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"

function Admission(){
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                Admission
            </div>
            <Footer />
        </Layout>
    )
}

export default Admission