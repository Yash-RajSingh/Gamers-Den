import {
  ErrorImage,
  ErrorWrapper,
  ErrorHeading,
  ErrorText,
  ErrorButton,
} from "./error404Elements";
import {Layout} from '../layout/layout'
import {useNavigate} from 'react-router-dom'
import AngryGamer from "../../assets/angryGamer1.gif";
const Error404 = () => {
    let navigate = useNavigate();
  return (
    <>
    <Layout>
      <ErrorWrapper>
        <ErrorHeading>Error 404</ErrorHeading>
        <ErrorImage src={AngryGamer} />
        <ErrorText>
          You just hit a route that doesn't exist... go to the last checkpoint.
        </ErrorText>
        <ErrorButton onClick={()=> navigate('/')}>
            Home
        </ErrorButton>
      </ErrorWrapper>
    </Layout>
    </>
  );
};

export default Error404;
