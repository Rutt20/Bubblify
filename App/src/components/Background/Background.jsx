import './styles.css';
import pinkBubbleImg from '../../resources/images/pink_b.png';

export const Background = () => (
    <>
        <div className='shadow'></div>
        <div className='img-wrapper'>
            <img className='home-img' src={pinkBubbleImg} alt='welcome'/>
            <img className='home-img' src={pinkBubbleImg} alt='welcome'/>
            <img className='home-img' src={pinkBubbleImg} alt='welcome'/>
            <img className='home-img' src={pinkBubbleImg} alt='welcome'/>
            <img className='home-img' src={pinkBubbleImg} alt='welcome'/>
        </div>
    </>
)

    