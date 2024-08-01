import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import img2 from "../assets/write.png";
import img5 from "../assets/user.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar fluid rounded className="sticky top-0" style={{ zIndex: 1000 }}>
      <Navbar.Brand href="http://localhost:5173/">
        <img
          src={img2}
          className="ml-2 mt-2 h-12 w-24 sm:h-12 sm:w-24 "
          alt="Write Logo"
        />
      </Navbar.Brand>

      <div className="flex md:order-2">
        <button
          type="button"
          data-collapse-toggle="navbar-search"
          aria-controls="navbar-search"
          aria-expanded="false"
          className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
        <div className="relative hidden md:block">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
        <button
          data-collapse-toggle="navbar-search"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-search"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      <div className="flex md:order-2 ">
        <Dropdown
          className="bg-gray-200 bg-opacity-50 rounded-xl shadow-2xl border-2 border-gray-200"
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img={img5} rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm font-medium">Bonnie Green</span>
            <span className="block truncate text-sm font-normal">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item className="font-medium">Dashboard</Dropdown.Item>
          <Dropdown.Item className="font-medium"> Settings</Dropdown.Item>
          <Dropdown.Item className="font-medium">My Notes</Dropdown.Item>
          <Dropdown.Divider />
          <Link to="/sign-out">
            <Dropdown.Item className="font-medium">Sign out</Dropdown.Item>
          </Link>
        </Dropdown>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-xl ">
          Home
        </Navbar.Link>
        <Navbar.Link href="/notes?tab=notes" className="text-xl">
          Notes
        </Navbar.Link>
        <Navbar.Link href="/sign-up" className="text-xl">
          Sign Up
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
