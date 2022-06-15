import styled from 'styled-components';
import { useState } from 'react';
import { sliderItems } from '~/pages/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-regular-svg-icons';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #ffffff;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: gray 0.8;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: ${(props) => props.direction === 'left' && '194px'};
    right: ${(props) => props.direction === 'right' && '140px'};
    bottom: 16px;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    font-size: 30px;
    color: var(--primary-text);
`;
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
    /* background-image: url(${(props) => props.bg}); */
    width: 100vw;
    height: 100vh;
    /* background-color: #${(props) => props.bg}; */
    position: relative;
`;

const Image = styled.img`
    width: 100vw;
    height: 100vh;
    position: relative;
`;

const Info = styled.div`
    position: absolute;
    padding-left: 134.5px;
    top: 210px;
    left: 0;
    display: flex;
`;
const Image2 = styled.img`
    position: absolute;
    right: -1007px;
    object-fit: contain;
`;

const InfoContainer = styled.div`
    width: 500px;
    height: 50vh;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Title1 = styled.h1`
    font-size: 35px;
    color: ${(props) => props.color};
`;

const Title2 = styled.h1`
    font-size: 42.5px;
    color: ${(props) => props.color};
`;

const Descs = styled.div`
    margin: 40px 0;
    padding-left: 20px;
    border-left: 6px solid red;
`;

const Title3 = styled.h2`
    font-size: 31.5px;
    color: var(--primary-text);
`;

const Btns = styled.div`
    justify-content: space-between;
`;

const Desc = styled.p`
    text-align: justify;
    font-size: 18px;
    color: var(--primary-text);
`;
const Button1 = styled.button`
    flex: 2.5;
    padding: 10px;
    font-size: 20px;
    border-color: transparent;
    background-color: ${(props) => props.color};
    cursor: pointer;
    margin-right: 20px;
    min-width: 291px;
    height: 50px;
    border-radius: 5px;
    color: var(--primary-text);
`;

const Button2 = styled.button`
    flex: 1;
    padding: 10px;
    font-size: 20px;
    border-color: transparent;
    background-color: ${(props) => props.color};
    cursor: pointer;
    padding: 0 20px;
    min-width: 185px;
    height: 50px;
    border-radius: 5px;
    color: var(--primary-text);
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick('left')}>
                <FontAwesomeIcon icon={faCircleLeft} />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide key={item.id}>
                        <Image src={item.img1} />
                        <Info>
                            <InfoContainer>
                                <Title1 color={item.color}>{item.title1}</Title1>
                                <Title2 color={item.color}>{item.title2}</Title2>
                                <Descs>
                                    <Title3>{item.title3}</Title3>
                                    <Desc>{item.desc}</Desc>
                                </Descs>
                                <Btns>
                                    <Button1 color={item.color}>{item.title_btn1}</Button1>
                                    <Button2 color={item.color}>THỬ NGAY</Button2>
                                </Btns>
                            </InfoContainer>

                            <Image2 src={item.img2} />
                        </Info>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick('right')}>
                <FontAwesomeIcon icon={faCircleRight} />
            </Arrow>
        </Container>
    );
};

export default Slider;
