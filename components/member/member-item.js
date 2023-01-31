import Image from "next/image"
import image from "next/legacy/image"

export default function MemberItem({data}){
    const title=data.properties.Name.rich_text[0].plain_text
    const depart=data.properties.Department.rich_text[0].plain_text
    const position = data.properties.Position.rich_text[0].plain_text
    const githubLink = data.properties.Github.rich_text[0].plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url
    const tags=data.properties.Research.multi_select
    // const start=data.properties.WorkPeriod.date.start
    // const end=data.properties.WorkPeriod.date.end

    // const calculatedPeriod=(start,end) => {
    //     const startDateStringArray = start.split('-');
    //     const endDateStringArray=end.split('-');

    //     var startDate=new Date(startDateStringArray[0],startDateStringArray[1],startDateStringArray[2]);
    //     var endDate=new Date(endDateStringArray[0],endDateStringArray[1],endDateStringArray[2]);
        
    //     console.log(`startDate: ${startDate}`)
    //     console.log(`endDate: ${endDate}`)

    //     const diffInMs=Math.abs(endDate - startDate);
    //     const result=diffInMs/(1000*60*60*24);

    //     console.log(`기간: ${result}`)
    //     return result;
    // }

    return (
        <div className="project-card">
            <Image
            className="rounded-t-xl"
                src={imgSrc}
                alt="cover image"
                width="5"
                height="10"
                layout="responsive"
                objectFit="cover"
                quality={100}
            />

            <div className="p-4 mr-2flex flex-col">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="text-xl ">{depart}</h3>
                <h3 className="mt-4 text-xl"> {position} </h3>
                <a href = {githubLink}>깃허브 바로가기 </a>
                
                {/* <h3 className="mt-4 text-xl">
                    작업기간 : {start} ~ {end} ({calculatedPeriod(start,end)}일)
                </h3> */}

                <div className="flex items-start mt-2">  
                    {tags.map((aTag)=>(
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
                    ))}
                </div>
            </div>
            
        </div>
    );
}