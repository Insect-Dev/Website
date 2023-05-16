import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    
    return (
        <div className="fixed top-0 flex items-center justify-between h-16 w-full bg-white/50 dark:bg-zinc-900/50 p-5 backdrop-blur-[2px] border-b border-gray-200 [z-index:1] navbar">
            <h1 className="text-2xl font-black self-center w-1/2">
                Insect Dev
            </h1>
            <div className="w-1/2 justify-end space-x-5 hidden sm:flex menu">
                <a href="#">About Us</a>
                <a href="#">Our Games</a>
                <a href="#">Contact</a>
            </div>
            <div className="w-1/2 justify-end space-x-5 flex sm:hidden menu">
                <FontAwesomeIcon icon={faBars} className="w-12 h-12" />
            </div>
        </div>
    );
}