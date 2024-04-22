import { BentoGrid, BentoGridItem } from "./bento-grid";
import { SiBlazor, SiPowerbi, SiJavascript, SiMicrosoftazure} from "react-icons/si";
import {
  IconBrandCSharp,
  IconFileTypeSql,
  IconBrandSass,
  IconHtml,
  IconBrandCss3
} from "@tabler/icons-react";
import haverImage from '../assets/haver.svg';
import emmaImage from '../assets/emma.svg';
import ztalmyImage from '../assets/ztalmy.svg';
import emailImage from '../assets/email.svg';


export function ProjectSection() {
  return (
    <div className=" w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center" id="projects">
      <div>
      <div className="mx-auto max-w-4xl mb-10 mt-10">
        <div className="mx-auto w-full lg:mx-0">
          <h2 className="text-3xl font-bold mx-4 tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
          <p className="mt-2 mx-4 text-lg leading-8 text-gray-600">
            I'm a seasoned software/web developer skilled in [mention specific technologies]. With a track record of delivering efficient and user-centric solutions, I excel in building impactful applications. Explore my portfolio to see how I can elevate your projects.</p>
        </div>
      </div>
      <BentoGrid className="max-w-4xl  mx-auto md:auto-rows-[22rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    </div>
    </div>
  );
}

  const items = [
    {
      title: "Haver Niagara NCR App",
      description: <p className="text-[10px]">The project manages NCR reports, roles, users, authentication, emails, Excel reports, PDF reports, and Power BI for dashboards.<br/><strong>  User:</strong> admin@outlook.com 
      <strong>  Password:</strong> Pa55w@rd<br/><a href="https://haverv2team3.azurewebsites.net/Identity/Account/Login" className="text-blue-500 hover:underline text-[15px]">Link</a></p>,
      header: <img src={haverImage} alt="Haver Niagara project Image" />,
      className: "md:col-span-3",
      icon: (
        <>
          <div className="flex items-center">
            <SiBlazor className="h-4 w-4 text-neutral-500 mr-2" />  
            <IconBrandCSharp className="h-4 w-4 text-neutral-500 mr-2" /> 
            <IconFileTypeSql className="h-4 w-4 text-neutral-500 mr-2" />
            <SiPowerbi className="h-4 w-4 text-neutral-500 mr-2" />
            <SiJavascript className="h-4 w-4 text-neutral-500 mr-2" />
            <SiMicrosoftazure className="h-4 w-4 text-neutral-500 mr-2" />
          </div>
        </>
      ),
    },
    {
      title: "Emma's Small Engines",
      description: <p className="text-[10px]">The project manages employee, customer, and order data using ADO, adapters, datasets, and .NET authentication.<br/><br/><a href="https://emmaproject.azurewebsites.net/" className="text-blue-500 hover:underline text-[15px]">Link</a> </p>,
      header: <img src={emmaImage} alt="Emma project Image" />,
      className: "md:col-span-3",
      icon: (
        <>
          <div className="flex items-center">  
            <IconBrandCSharp className="h-4 w-4 text-neutral-500 mr-2" /> 
            <IconFileTypeSql className="h-4 w-4 text-neutral-500 mr-2" />
            <SiBlazor className="h-4 w-4 text-neutral-500 mr-2" /> 
          </div>
        </>
      ),
    },
    {
      title: "Ztalmy Webpage",
      description: <p className="text-[10px]">Participation in this project, develop design and responsiveness in the site.<br/><br/><a href="https://www.ztalmy.com/" className="text-blue-500 hover:underline text-[15px]">Link</a></p>,
      header: <img src={ztalmyImage} alt="Ztalmy project Image" />,
      className: "md:col-span-3",
      icon: (
        <>
          <div className="flex items-center">  
            <SiJavascript className="h-4 w-4 text-neutral-500 mr-2" /> 
            <IconBrandSass className="h-4 w-4 text-neutral-500" />
          </div>
        </>
      ),
    },
    {
      title: "Email Developer Experience",
      description: <p className="text-[10px]">Develop emails for marketing that is compatible across different email services.<br/><br/></p>,
      header: <img src={emailImage} alt="Email project Image" />,
      className: "md:col-span-3",
      icon: (
        <>
          <div className="flex items-center">  
            <IconHtml className="h-4 w-4 text-neutral-500 mr-2" /> 
            <IconBrandCss3 className="h-4 w-4 text-neutral-500" />
          </div>
        </>
      ),
    },
  ];

export default ProjectSection