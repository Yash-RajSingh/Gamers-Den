import { LoaderBody, LoaderWrapper } from "./loaderElements";
import { PacmanLoader } from "react-spinners";
import { useEffect, useState } from "react";

const Loader = () => {
    const [preloader, setPreloader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setPreloader(false)
        }, 1000)
    })
    return (<>
        {preloader &&
            <LoaderBody>
                <LoaderWrapper className="test">
                    <PacmanLoader color={"#fff"} size={50}/>
                </LoaderWrapper>
            </LoaderBody>
        }
    </>);
}

export default Loader;