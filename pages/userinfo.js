import Layout from "../components/layout";
import Head from "next/head";
import {TOKEN,MEMBER_DATABASE_ID} from "../config/index_member";
import MemberItem from "../components/member/member-item";


export default function Userinfo({memebers,memberNames})
{
    console.log(memberNames);

    return (
            <Layout>
              <div className="flex flex-col items-center justify-center min-h-screen px-5 py-24 mb-10">
                <Head>
                      <title>SMU BipaLab WebSite</title>
                      <meta name="description" content="선문대학교 컴퓨터공학부 연구실" />
                      <meta name="viewport" content="width=device-width, initial-scale=1" />
                      <link rel="icon" href="/favicon.ico" />
                </Head>

                  
                <div className="grid grid-cols-1 md:grid-cols-3 py-10 m-6 gap-8 ">
                  {memebers.results.map((allProject) => (
                    // <h1>{allProject.properties.Name.rich_text[0].plain_text}</h1>
                    <MemberItem key={allProject.id}data={allProject}/>
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
      
      const res = await fetch(`https://api.notion.com/v1/databases/${MEMBER_DATABASE_ID}/query`, options)

      const memebers = await res.json()

      
      const memberNames = memebers.results.map((tProject) =>(
        tProject.properties.Name.rich_text[0].plain_text
      ))

    return {
      props: {memebers,memberNames}, // will be passed to the page component as props
    }
  }
