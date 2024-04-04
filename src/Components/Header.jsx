import logo from "../assets/Images/logo.png";

// react icons are imported
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(false);

  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <img
          src={logo}
          className="w-[80px] md:w-[115px] object-cover "
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem key={item} name={item.name} Icon={item.icon} />
          ))}
        </div>
        {/* MID SCREEN SIZE NAVBAR WITH 3 ICONS */}
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item1, index) =>
              index < 3 && (
                <HeaderItem key={item1} name={""} Icon={item1.icon} />
              )
          )}
          {/* 3 DOT ICON WITH OPEN AND CLOSE DROPMENU SIDE*/}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem key="doticon" name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div
                className="absolute mt-3 bg-[#121212] 
            border-[1px] border-gray-700 p-3 px-5 py-4"
              >
                {menu.map(
                  (item2, index) =>
                    index > 2 && (
                      <HeaderItem
                        key="item2"
                        name={item2.name}
                        Icon={item2.icon}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        alt="profile"
        className="w-[40px] rounded-full"
      />
    </div>
  );
}
export default Header;
