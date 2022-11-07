import config from "../../config.json";
import styled from "styled-components";
import Image from "next/image"
import  ImgBanner  from "../assets/img/banner.jpg";

const StyledHeader = styled.div`
    .user-image {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
    img {
        width: 100%;
        object-fit: cover;
    }
    /* background-image: url('https://unsplash.com/photos/fPkvU7RDmCo'); */
`;


export function Header() {
    return (
        <>
        <StyledHeader>
            <Image src={ImgBanner} alt="ok" quality={100} />
            <section className="user-info">
                
                <img className="user-image" src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
        </>
    )
}