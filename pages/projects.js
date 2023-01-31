import Layout from "../components/layout";
import Head from "next/head";
import {TOKEN,DATABASE_ID} from "../config/index";
import ProjectItem from "../components/projects/project-item";


export default function Projects({projects,projectNames})
{
  console.log(projectNames);

    return (
            <Layout>
              <div className="flex flex-col items-center justify-center min-h-screen px-5 py-24 mb-10">
                <Head>
                      <title>SMU BipaLab WebSite</title>
                      <meta name="description" content="선문대학교 컴퓨터공학부 연구실" />
                      <meta name="viewport" content="width=device-width, initial-scale=1" />
                      <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1 className="text-3xl font-bold sm:text-5xl">
                  Total Project: 
                  <span className="pl-4 text-blue-500">{projectNames.length}</span>
                  </h1>
                  
                <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 ">
                  {projects.results.map((aProject) => (
                    // <h1>{aProject.properties.Name.rich_text[0].plain_text}</h1>
                    <ProjectItem key={aProject.id}data={aProject}/>
                  ))}
                </div>
              </div>
                
                
            </Layout>

    );
}   

// 데이터 가져오는 부분
//빌드 타임에 호출
export async function getStaticProps(context) {

    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'content-type': 'application/json',
          Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
          sorts: [
            {
              "property": "Name",
              "direction":"ascending"
            }
          ],
          page_size: 100
        })
      };
      
      const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

      const projects = await res.json()

      
      const projectNames = projects.results.map((aProject) =>(
        aProject.properties.Name.rich_text[0].plain_text
      ))


    return {
      props: {projects,projectNames}, // will be passed to the page component as props
    }
  }
