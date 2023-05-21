import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <div className="navbar fixed top-0 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white/50 p-5 backdrop-blur-[2px] [z-index:1] dark:bg-zinc-900/50">
            <h1 className="w-1/2 self-center text-2xl font-black">
                Insect Dev
            </h1>
            <div className="menu hidden w-1/2 justify-end space-x-5 sm:flex">
                <a href="#">About Us</a>
                <a href="#">Our Games</a>
                <a href="#">Contact</a>
            </div>
            <div className="menu flex w-1/2 justify-end space-x-5 sm:hidden">
                <FontAwesomeIcon icon={faBars} className="h-12 w-12" />
            </div>
        </div>
    );
}
