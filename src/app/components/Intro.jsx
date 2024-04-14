import "./Intro.css"

export default function Intro() {
    return (
        <>
            <div id="home" className="intro">
                <div className="container">
                    <div className="intro__text">
                        <div className="intro__group d-flex">
                            <h1 className="intro__item1">Hi I’m <span className="intro__name accent-color">Vipul Sahu</span></h1>
                            <img width="48" height="48" src="https://img.icons8.com/emoji/48/waving-hand-medium-skin-tone.png" alt="waving-hand-medium-skin-tone"/>
                        </div>
                        
                        <div className="intro__group d-flex">
                            <h2 className="intro__item2">WEB <span className="accent-color">+</span> APP DEVELOPER based in <span className="intro__country accent-color">India</span></h2>
                            <img width="48" height="48" src="https://img.icons8.com/color/48/india.png" alt="india"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}