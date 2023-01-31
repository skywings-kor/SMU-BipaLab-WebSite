
import Header from './header';
import Footer from './footer';


//모든 레이아웃을 넣는 개념
export default function Layout({children})
{
    return (
        //외부에서 들어오는 HTML을 사용할 때
        <div className="bg-primary">
            
            <Header/>
            <div>{children}</div>
            <Footer/>
        
        </div>
    );
}