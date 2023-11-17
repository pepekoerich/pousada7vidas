"use client";

import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { FaBars } from "react-icons/fa";
import Link from "next/link";

export default function DrawerNav() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <IconButton variant="text" className="text-[#4a6d73]" color="teal">
        <FaBars onClick={openDrawer} className="cursor-pointer h-5 w-5" />
      </IconButton>

      <Drawer
        open={open}
        onClose={closeDrawer}
        className="p-4 bg-gradient-to-b from-[#EAE7D6] to-[#EAE7D6]/60"
        placement="right"
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-[#4a6d73] font-semibold text-xl hover:tracking-widest cursor-pointer duration-500">POUSADA 7 VIDAS</h2>
          <IconButton
            variant="text"
            color="teal"
            className="text-[#4a6d73] "
            onClick={closeDrawer}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="flex flex-col gap-3 text-[#4a6d73] text-2xl antialiased">
          <Link
            href="/"
            className="hover:scale-110 hover:font-semibold transition  duration-500 hover:translate-x-6 "
          >
            Home
          </Link>
          <Link
            href="/"
            className="hover:scale-110 hover:font-semibold transition duration-500 hover:translate-x-6 "
          >
            Sobre
          </Link>
          <Link
            href="/"
            className="hover:scale-110 hover:font-semibold transition duration-500 hover:translate-x-6 "
          >
            Acomodações
          </Link>
          <Link
            href="/"
            className="hover:scale-110 hover:font-semibold transition duration-500 hover:translate-x-6 "
          >
            Contato
          </Link>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
