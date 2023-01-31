import Animation from "./animation"
import Link from "next/link"
export default function Hero()
{
    return (
        <>
            
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">SMU_Computer Engineering
                        <br className="hidden lg:inline-block"/> BipaLab
                    </h1>
                    <p className="mb-8 leading-relaxed">Various projects are developed and researched through machine learning using artificial intelligence and big data.</p>
                    <p className="mb-8 leading-relaxed">인공지능 및 빅데이터를 이용한 머신러닝으로 각종 프로젝트 개발 및 연구를 진행합니다.</p>
                    <div className="flex justify-center">
                        <Link href="/projects" legacyBehavior>
                            <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Project </a>
                        </Link>

                        <Link href="/userinfo" legacyBehavior>
                            <a className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Member</a>
                        </Link>
                    </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Animation/>

                    {/* 이미지 쓸 때 사용하기 */}
                    {/* <img className="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/premium-vector/artificial-intelligence-ai-technology-background-hi-tech-innovation-abstract-background-vector-illustration_42421-1352.jpg"></img> */}
                    </div>
            
        </>


    );
}