import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function NavbarComponent() {
  const location = useLocation();
  const user = null;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const resizeListener = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const menuItems = user
    ? [
        "Home",
        "Service",
        "Contact Us",
        "My Profile",
        "My Appointments",
        "Log Out",
      ]
    : ["Home", "Service", "Contact Us"];

  return isMobile ? (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img src="../../../public/smartcare.svg" alt="" className="w-10/12" />
          <p className="marck-script-regular text-[#222C8D] md:text-3xl text-2xl lg:text-4xl">
            Smart<span className="text-[#3B37D7]">Care</span>
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link
            href="#"
            className={
              location.pathname === "/contact-us"
                ? "text-navPrimary"
                : "text-black"
            }
          >
            Sign Up
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="#"
            className="btn bg-navPrimary text-white rounded-md hover:bg-gray-400
                hover:text-black"
          >
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-black hover:text-navPrimary"
              href={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "-")}`
              }
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  ) : (
    <Navbar
      maxWidth="full"
      shouldHideOnScroll
      className="py-4 mx-0"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:top-4",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-navPrimary",
        ],
      }}
    >
      <NavbarBrand>
        <img src="../../../public/smartcare.svg" alt="" />
        <p className="marck-script-regular text-[#222C8D] md:text-3xl text-2xl lg:text-4xl">
          Smart<span className="text-[#3B37D7]">Care</span>
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6 text-xl" justify="end">
        <NavbarItem isActive={location.pathname === "/"}>
          <Link
            href="/"
            className={
              location.pathname === "/" ? "text-navPrimary" : "text-black"
            }
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/service"}>
          <Link
            href="/service"
            className={
              location.pathname === "/service"
                ? "text-navPrimary"
                : "text-black"
            }
          >
            Service
          </Link>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/contact-us"}>
          <Link
            href="/contact-us"
            className={
              location.pathname === "/contact-us"
                ? "text-navPrimary"
                : "text-black"
            }
          >
            Contact Us
          </Link>
        </NavbarItem>

        {user ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Profile</DropdownItem>
              <DropdownItem key="team_settings">My Appointments</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <div className="flex items-center justify-end gap-6">
            <NavbarItem>
              <Link
                href="#"
                className={
                  location.pathname === "/contact-us"
                    ? "text-navPrimary"
                    : "text-black"
                }
              >
                Sign Up
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                href="#"
                className="btn bg-navPrimary text-white rounded-md text-lg px-2 hover:bg-gray-400
                hover:text-black"
              >
                Login
              </Button>
            </NavbarItem>
          </div>
        )}
      </NavbarContent>
    </Navbar>
  );
}
