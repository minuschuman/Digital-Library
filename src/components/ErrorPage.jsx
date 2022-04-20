import '../css/errorPage.css';
import bulb from "../img/light-bulb.png"
export default function ErrorPage(params) {
    return (
        <>
            <div className='errorBody'>
                <img src={bulb} className="errImage" alt="404" />
                <div>
                    <div className="dialog">
                        <h1>Hey, who turned off the lights?</h1>
                        <p>We were unable to find the page you were looking for.</p>
                    </div>
                </div>
            </div>
        </>
    )
};
