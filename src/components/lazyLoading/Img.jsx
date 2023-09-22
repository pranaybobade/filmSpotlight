import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, className }) => {
    return (
        <>
            <LazyLoadImage
                className={className || ""}
                alt=""
                effect="blur"
                height={'100%'}
                width={'100%'}
                src={src}
            />
        </>
    );
};

export default Img;