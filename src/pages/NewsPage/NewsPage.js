import Loader from "../../components/loader/loader";
import { Layout } from "../../components/layout/layout";
import News from "../../components/news/news";

const NewsPage = () => {
  return (
    <>
      <Loader />
      <Layout>
        <News />
      </Layout>
    </>
  );
};

export default NewsPage;
