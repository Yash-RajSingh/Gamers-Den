import Disscussion from "../../components/discussion/discussion";
import { Layout } from "../../components/layout/layout";
import Loader from "../../components/loader/loader";
const DiscussionPage = () => {
    return ( 
        <>
        <Loader />
        <Layout>
            <Disscussion />
        </Layout>
        </>
     );
}
 
export default DiscussionPage;