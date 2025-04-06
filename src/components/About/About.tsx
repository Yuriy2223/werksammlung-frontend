import { AboutContainer, WrapperContext, WrapperImg } from "./About.styled";
import imgUrl1 from "../../assets/порт1111.webp";

export const About = () => {
  const imgUrl = imgUrl1;
  const fullName = "Yuriy Shukan";

  const handleOpenCV = () => {
    const fileId = "660f123456abc7890abcde12"; // <--  ObjectId з MongoDB
    const url = `http://localhost:3000/pdf/${fileId}`; // URL до твого бекенду

    window.open(url, "_blank");
  };

  return (
    <section id="about">
      <AboutContainer>
        <WrapperImg>
          <img
            width="400px"
            height="400px"
            src={imgUrl}
            alt={`${fullName} portrait`}
          />
        </WrapperImg>
        <WrapperContext>
          <h2>Hi, I’m {fullName}.</h2>
          <h1>I’m a Full-Stack JavaScript Developer</h1>
          <button type="button" onClick={handleOpenCV}>
            VIEW CV
          </button>
        </WrapperContext>
      </AboutContainer>
    </section>
  );
};
