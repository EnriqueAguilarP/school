import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"

function Engineering(){
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                Engineering
            </div>
            <Footer />
        </Layout>
    )
}

export default Engineering