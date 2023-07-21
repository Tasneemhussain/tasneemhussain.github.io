import "./skills.css";
import { FaHtml5,FaCss3Alt ,FaReact,FaBootstrap,FaGithubSquare,FaRegFileCode,FaMicrosoft} from 'react-icons/fa';


const Skills = () => {
  return (
    <>
      <div className="skill" id="skills">
        {/* <div class="container-fuild"> */}
        <div className="row  justify-content-lg-center mt-5">
          <h1 className="title">Education and skills</h1>
          <div className="col-4 mt-5 ">
            <h2 className="skl-title">Education</h2>
            <ul>
              <li>
                <h5>IT-Programming Course in Front-end Development</h5>
                <p>from Sundgården Folkhögskola in 2023</p>
              </li>
              <li>
                <h5>Bachelor of Commerce</h5>
                <p>from Chamrajpet First Grade Collage with 65% in 2013</p>
              </li>
              <li>
                <h5>Pre-University Education</h5>
                <p>from BBMP Collage for Women with 54% in 2010</p>
              </li>
              <li>
                <h5> SSLC (10th Grade) </h5>
                <p>from Kin Kids Convent with 56% in 2008</p>
              </li>
            </ul>
          </div>
          <div className="col-4 mt-5 ">
            <h2 className="skl-title">Skills</h2>
            <ul>
              <li>
                HTML <FaHtml5 className="icons2"/>/Css3 <FaCss3Alt className="icons2"/>
              </li>

              <li>
                JavaScript/React.js <FaReact className="icons2"/>
              </li>
              <li>
               Modern Design Libraries <FaBootstrap className="icons2"/>
              </li>
              <li>Git /GitHub  <FaGithubSquare className="icons2"/> </li>
              <li>Visual Studio Code </li>
              <li>Responsive Web Design</li>
              <li>Programming Techniques <FaRegFileCode className="icons2"/></li>
              <li>Agile Workflow</li>
              <li>
                Microsoft Office 365 (Word/ Excel/ outlook and Powerpoint)<FaMicrosoft className="icons2"/>
              </li>
              <li>Knowledge about Windows 10 Client Operating System</li>
              <li>Self-motivating and Leadership qualities</li>
            </ul>
          </div>
        </div>
      </div>
      {/* </div> */}

      <hr className="line" />
    </>
  );
};

export default Skills;
