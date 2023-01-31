import Link from 'next/link';
import DarkModeToggleButton from './dark-mode-toggle-button';

export default function Header()
{
    return (
        
            <>
                <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    
                    <Link href="/" legacyBehavior>
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        
                        <span className="ml-3 text-xl">SMU-BipaLab</span>
                        </a>
                    </Link>

                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

                    <Link href="/" legacyBehavior>
                        <a className="mr-5 hover:text-gray-900">Home</a>
                    </Link>

                    <Link href="/projects" legacyBehavior>
                        <a className="mr-5 hover:text-gray-900">Project</a>
                    </Link>

                    <Link href="/userinfo" legacyBehavior>
                        <a className="mr-5 hover:text-gray-900">Member</a>
                    </Link>

                    <Link href="/comeroot" legacyBehavior>
                        <a className="mr-5 hover:text-gray-900">Contact</a>
                    </Link>
                    
                    </nav>
                    {/* 다크모드 토글버튼 작업*/}
                    <DarkModeToggleButton/>
                </div>
                </header>
            </>
        
    )
}