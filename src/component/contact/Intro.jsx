import "./intro.css";
import Me from "../../img/fercha-ilus.png";
import { useContext} from "react";


import { ThemeContext } from "../../context";

const Intro = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return <div className='i'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>
                        Hello, My name is 
                    </h2>
                    <h2 className='i-name'>Fer Quagliaro</h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Frontend Developer</div>
                            <div className="i-title-item">Multimedia Designer</div>
                            <div className="i-title-item">Teacher</div>
                        </div>
                    </div>
                    <div className="i-des">
                    I can design and develop all kinds of digital pieces,
                    As a designer I understand the brand guides and I try to get the modern and efficient way to show an idea;
                    And as a developer I can have fun writing code but also in a very efficient and orderly fashion.
                    I like to innovate with technology and improve concepts and ideas.
                    </div>
                </div>
                <svg
                style={{
                  backgroundColor: darkMode ? "#222" : "##05386BE1",
                  fill: darkMode && "##05386BE1",
                }}
                width="75"
                height="75"
                viewBox="0 0 75 75"
                fill="none"
                stroke="#05386B"
                className="i-scroll"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="scroll">
                  <path
                    id="Vector"
                    d="M40.5 15L34.5 9L28.5 15"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M28.5 24L34.5 30L40.5 24"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <g id="Group">
                    <path
                      id="Vector_3"
                      d="M9 37.5H60"
                      stroke-width="3"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <path
                    id="Vector_4"
                    d="M34.5 27V9"
                    stroke-width="2.9895"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <g id="Group_2">
                    <path
                      id="Vector_5"
                      d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                      stroke-width="3"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className='i-right'>
                <div className='i-bg'></div>
                  <img src={Me} alt="Fernanda Quagliaro" className='i-img' />
                
            </div>
        </div>;
};

export default Intro;
