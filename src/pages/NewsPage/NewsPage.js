import Loader from '../../components/loader/loader';
import { Layout } from '../../components/layout/layout';
import News from '../../components/news/news';

const NewsPage = () => {
    return ( 
        <>
        <Loader />
            <div>
                <Layout>
                    <News />
                </Layout>
            </div>
        </>
     );
}
 
export default NewsPage;