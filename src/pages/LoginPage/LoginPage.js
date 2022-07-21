import Loader from '../../components/loader/loader';
import { Layout } from '../../components/layout/layout';
import Login from '../../components/login/login';

const LoginPage = () => {
    return (
        <>
            <Loader />
            <div>
                <Layout>
                    <Login />
                </Layout>
            </div>
        </>
    );
}

export default LoginPage;