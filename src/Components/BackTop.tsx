import  { useEffect, useState } from 'react'

const BackTop = () => {
     const [isScrolled, setIsScrolled] = useState<boolean>(false);
     useEffect(() => {
       const handleScroll = () => {
         if (window.scrollY > 300) {
           setIsScrolled(true);
         } else {
           setIsScrolled(false);
         }
       };

       window.addEventListener("scroll", handleScroll);

       return () => {
         window.removeEventListener("scroll", handleScroll);
       };
     }, []);

    return (
    <div id="go-top" className={` ${isScrolled ? 'show' : ''}`}>
        <a className="smoothscroll" title="Back to Top" href="#top">
            <i className="fa fa-angle-up"></i>
        </a>
    </div>
    );
}

export default BackTop