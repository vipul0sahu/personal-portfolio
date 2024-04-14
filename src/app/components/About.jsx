import "./About.css";

export default function About() {
  return (
    <>
      <div id="about" className="about">
        <div className="container">
          <h3 className="about__heading f-prop">About me</h3>
          <h2 className="about__punchline"><span className="accent-color">JOHAR</span>, AS WE SAY HERE</h2>
          <p className="about__description">
            My name is Vipul Sahu. I’m a 22 year-old Indian front-end developer
            and UI designer based in India (but worldwide working). I’m
            available for projects, collaborations and experiments.
          </p>
        </div>
      </div>
    </>
  );
}
