import image from "../assets/logo.png"
import { PiHouseLineThin } from "react-icons/pi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { IoCompassOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

function NavBar() {

    return(
        <nav className="flex h-[54px] w-screen justify-between items-center drop-shadow-md px-10 py-5 bg-white">
            <div>
                <img className="h-12" src={image} alt="" />
            </div>
            <div>
                <input type="text" placeholder="Search" className="border border-slate-300 text-center" />
            </div>
            <div className="flex gap-5 justify-around">
                <PiHouseLineThin className="hover:text-3xl"/>
            <IoPaperPlaneOutline className="hover:text-3xl"/>
            <IoCompassOutline className="hover:text-3xl"/>
            <FaRegHeart className="hover:text-3xl"/>
            <img className="h-10 rounded-full" src="https://image.mymixtapez.com/artists/5808/profile/large" alt=""
            />
            </div>
        </nav>
    )
}

export default NavBar


