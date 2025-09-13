import colorSharp from "../assets/img/color-sharp.png";

export const Experiences = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <h2> Work Experience</h2>

        {/* Scrollable timeline/list */}
        <div className="experience-scroll">
          <div className="experience-item">
            <h5>Software Engineer Intern</h5>
            <p>Allstate Canada – September 2022 – April 2023</p>
            <ul>
              <li>
                Collaborated cross-functionally to remodel the My Allstate
                Insurance application by implementing new features such as
                French language support and province-specific service
                availability using ReactJS, while optimizing existing
                functionalities to improve accessibility, customer interaction,
                and overall satisfaction.
              </li>
              <li>
                Integrated RESTful APIs with SQL database to serve date to the
                My Allstate Insurance app and internal agent dashboards,
                optimizing CRUD operations and enabling efficient real-time
                access across applications.
              </li>
              <li>
                Developed and executed unit tests with Jest to validate frontend
                components, increasing test coverage by 35% and improving
                application reliability.
              </li>
              <li>
                Configured Jenkins with Git to automate builds and deployments,
                reducing failed deployments by 30% and improving system
                reliability.
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <h5>Frontend Developer Intern</h5>
            <p>Replic – May 2021 – August 2021</p>
            <ul>
              <li>
                Designed an eCommerce web application using React, Node.js and
                applied mobile-first approach when designing new features to
                ensure consistency and usability across various devices.
              </li>
              <li>
                Utilized Postman to experiment with various parameters for API
                testing ensuring robustness and reliability of the application.
              </li>
              <li>
                Generated webpages to account for accessibility issues to comply
                with the Accessibility for Ontarians with Disabilities Act
                (AODA), vastly improving the user experience for every customer.
              </li>
              <li>
                Built a seamless eCommerce functionality by implementing RESTful
                API calls that enabled efficient communication between frontend
                components and backend services, enhancing data flow and user
                experience.
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <h5> CyberSecurity Research Intern</h5>
            <p>Phishing Project – Sept 2024 to Dec 2024</p>
            <ul>
              <li>
                Developed a security analysis program using Python to automate
                the extraction of key email header information including SPF,
                DKIM, and DMARC signatures to identify phishing emails with up
                to 74% accuracy using the Nazario Dataset.
              </li>
              <li>
                Processed the Nazario phishing dataset and built an SQLite3
                database to store and organize data, enabling efficient analysis
                and extraction of key insights, such as identification of
                commonly impersonated company names and patterns in malicious
                hyperlink structures, to identify areas of improvement within
                cybersecurity programs.
              </li>
              <li>
                Developed a Django-based web interface that enables users to
                upload phishing emails or manually input email details,
                automatically parsing and providing tailored, sector-specific
                advice on potential phishing threats for improved
                decision-making.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  );
};
