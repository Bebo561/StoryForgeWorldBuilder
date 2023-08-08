import './Styles/AboutUs.css';
import { useNavigate } from 'react-router-dom';

export default function AboutUs(){
    const nav = useNavigate();

    const StartNow = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        nav('/Home/Name');
    }

    return (
        <>
            <div id="HomeBG">
                <div id="AboutUsContainer">
                    <h1>Create Now</h1>
                    <p>World Forger is a ChatGPT powered DnD character generator made to help create beautiful world building
                    and dynamic stories within seconds. Within a few clicks, you'll be able to: create orginal characters with
                    unique characteristics and backstories, craft stat rolls for said characters, or even just randomize what 
                    class you want to play.
                    </p>
                </div>
                <button id="AboutUsStartNow" onClick={StartNow}>Start Now!</button>
            </div>
        </>
    )
}