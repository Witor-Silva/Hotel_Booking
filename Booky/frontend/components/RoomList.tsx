"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStar, FaStarHalf } from "react-icons/fa";

const RoomList = ({ rooms }: { rooms: any }) => {
  return (
    <section className="py-16 min-h-[90vh]">
      {/* image & title */}
      <div>
         {/* image */}
         <div className="relative w-[82px] h-[20px]">
          <Image src={'/assets/heading-icon.svg'} fill alt={""} className="object-cover"/>
         </div>
         <h2 className="h2 mb-8">Our Rooms</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {rooms.data.map((room: any) => {
          const imgURL = `http://127.0.0.1:1337${room.attributes.image.data?.attributes.url}`;
          return (
            <div key={room.id}>
              <Link href={`/room/${room.id}`}>
                <div className="relative w-full h-[300px] overflow-hidden mb-6">
                  <Image
                    src={imgURL}
                    fill
                    priority
                    alt=""
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="h-[134px]">
                <div className="flex items-center justify-between mb-6">
                  <div>Capacity: - {room.attributes.capacity} person</div>
                  <div className="flex gap-1 text-accent">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                  </div>
                </div>
                <Link href={`/room/${room.id}`}>
                  <h3 className="h3">{room.attributes.title}</h3>
                </Link>
                <p className="h3 font-secondary font-medium text-accent mb-4">
                  ${room.attributes.price}{" "}
                  <span className="text-base text-secondary">/ night</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RoomList;
