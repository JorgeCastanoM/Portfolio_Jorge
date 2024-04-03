
import { BackgroundBeams } from "./background-beams";
import { BsFiletypeHtml } from "react-icons/bs";
import { SiVisualstudio } from "react-icons/si";
import { DiScrum } from "react-icons/di";
import {
    IconBrandCSharp, 
    IconBrandPython,
    IconBrandJavascript,
    IconBrandTypescript,
    IconSql,
    IconFileTypeCss,
    IconBrandTailwind,
    IconBrandBootstrap,
    IconBrandReact,
    IconBrandNodejs
  } from "@tabler/icons-react";

 
  export function SkillsSection() {
    return (
      <div className=" w-full mt-20 rounded-md bg-white relative flex flex-col items-center justify-center antialiased" id="skills">
        <div className="max-auto mx-auto max-w-4xl p-4">
          <div className="mx-auto w-full lg:mx-0">
            <h2 className="text-3xl font-bold mx-4 tracking-tight text-gray-900 sm:text-4xl">Skills</h2>
            <p className="mt-2 mx-4 text-lg leading-8 text-gray-600">
            I am proficient in several programming languages including C#, JavaScript, Python, TypeScript, SQL, and HTML/CSS. My expertise extends to a range of technologies such as .NET, .NET MAUI, React.js, Node.js, MySQL, MongoDB, and Bootstrap. I am well-versed in design patterns such as MVC, Mobile-first, and BEM, which allows me to create scalable and maintainable solutions.
            </p>
            <br/>
            <h3 className="text-3xl font-bold mx-4 tracking-tight text-gray-900 sm:text-4xl">Languages</h3>
          </div>
          {/* Grid of cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {/* C# card 1*/}
            <div className="max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white relative overflow-hidden">
              <div className="inset-0 flex items-start justify-start">
                <IconBrandCSharp className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6">
                <span><strong>CSHARP</strong></span>
                <ul className="text-base list-disc">
                  <li>ASP.NET Web Form Application</li>
                  <li>Web-APIs </li>
                  <li>.NET Authentication</li>
                  <li>Data Objects (ADO)</li>
                  <li>MAUI</li>
                </ul>
              </div>
            </div>
            {/* Python card 2 */}
            <div className="max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white relative overflow-hidden">
              <div className="inset-0 flex items-start justify-start">
              <IconBrandPython className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6">
              <span><strong>PYTHON</strong></span>
                <ul className="text-base list-disc">
                  <li>Panda</li>
                  <li>NumPy</li>
                  <li>Matplotlib</li>
                </ul>
              </div>
            </div>
            {/* JavaScript card 3 */}
            <div className="max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white relative overflow-hidden">
              <div className="inset-0 flex items-start justify-start">
                <IconBrandJavascript className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6">
              <span><strong>JAVASCRIPT</strong></span>
                <ul className="text-base list-disc">
                  <li>DOM</li>
                  <li>Callbacks</li>
                  <li>Promises</li>
                  <li>Async/Await</li>
                </ul>
              </div>
            </div>
            {/* TypeScript card 4 */}
            <div className="max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white relative overflow-hidden">
              <div className="inset-0 flex items-start justify-start">
                <IconBrandTypescript className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6">
              <span><strong>TYPESCRIPT</strong></span>
                <ul className="text-base list-disc">
                  <li>Aliases and Interfaces</li>
                  <li>Classes</li>
                </ul>
              </div>
            </div>
            {/* SQL card 5 */}
            <div className="max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white relative overflow-hidden">
              <div className="inset-0 flex items-start justify-start">
                <IconSql className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6">
              <span><strong>SQL</strong></span>
                <ul className="text-base list-disc">
                  <li>MySQL</li>
                  <li>SQL SERVER</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>
            {/* CSS card 3 */}
            <div className="max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white relative overflow-hidden">
              <div className="inset-0 flex items-start justify-start">
                <IconFileTypeCss className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6">
              <span><strong>CSS</strong></span>
                <ul className="text-base list-disc">
                  <li>SASS</li>
                  <li>Bootstrap</li>
                  <li>Tailwind</li>
                  <li>Layout</li>
                  <li>Responsive</li>
                </ul>
              </div>
            </div>
            {/* HTML card 3 */}
            <div className="max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white relative overflow-hidden">
              <div className="inset-0 flex items-start justify-start">
                <BsFiletypeHtml className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6">
              <span><strong>HTML</strong></span>
                <ul className="text-base list-disc">
                  <li>Email Developer</li>
                  <li>Layout</li>
                  <li>Responsive</li>
                </ul>
              </div>
            </div>
            {/* End */}
          </div>
          {/* Technology Section */}
          <div className="mx-auto w-full lg:mx-0">
            <br/>
            <h3 className="text-3xl font-bold mx-4 tracking-tight text-gray-900 sm:text-4xl">Technologies</h3>
          </div>
                    {/* Grid of cards */}
                    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-4 mt-8">
            {/*.NET card 1*/}
            <div className="max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white relative overflow-hidden">
              <div className="inset-0 flex items-center justify-center">
                <SiVisualstudio className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6 flex items-center justify-center">
              <span><strong>.NET</strong></span>
              </div>
            </div>
            {/* Tailwind card 2 */}
            <div className="max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white relative overflow-hidden">
              <div className="inset-0 flex items-center justify-center">
              <IconBrandTailwind className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6 flex items-center justify-center">
              <span><strong>TAILWIND</strong></span>
              </div>
            </div>
            {/* Bootsrap card 3 */}
            <div className="max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white relative overflow-hidden">
              <div className="inset-0 flex items-center justify-center">
                <IconBrandBootstrap className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6 flex items-center justify-center">
              <span><strong>BOOTSRAP</strong></span>
              </div>
            </div>
            {/* React card 4 */}
            <div className="max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white relative overflow-hidden">
              <div className="inset-0 flex items-center justify-center">
                <IconBrandReact className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6 flex items-center justify-center">
              <span><strong>REACT</strong></span>
              </div>
            </div>
            {/* Node.js card 5 */}
            <div className="max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white relative overflow-hidden">
              <div className="inset-0 flex items-center justify-center">
                <IconBrandNodejs className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6 flex items-center justify-center">
              <span><strong>NODE.JS</strong></span>
              </div>
            </div>
            {/* End */}
          </div>
          {/* Certifications */}
          <div className="mx-auto w-full lg:mx-0">
            <br/>
            <h3 className="text-3xl font-bold mx-4 tracking-tight text-gray-900 sm:text-4xl">Certifications</h3>
          </div>
                    {/* Grid of cards */}
                    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-4 mt-8">
            {/*Scrum card 1*/}
            <div className="max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white relative overflow-hidden">
              <div className="inset-0 flex items-center justify-center">
                <DiScrum className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6 flex items-center justify-center">
              <span><strong>SCRUM</strong></span>
              </div>
            </div>
            {/* End */}
          </div>
        </div>
        <BackgroundBeams />
      </div>
    );
  }

export default SkillsSection