"use client";

import React from "react";
import "../components/homeElementCss/InfiniteScroller.css";
import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiGeeksforgeeks,
  SiHackerrank,
  SiHackerearth,
  SiBehance,
  SiFigma,
  SiHtml5
} from "react-icons/si";
import { TbCodeAsterix } from "react-icons/tb";
import { FaFreeCodeCamp } from "react-icons/fa";
import { DiJsBadge, DiReact,DiTerminal } from "react-icons/di";
import { GiHorseHead } from "react-icons/gi";
import { TbBrandCpp } from "react-icons/tb";

const platforms = [
  {
    type: "svg",
    image: <SiHackerrank />,
    name: "Hackerrank",
    link: "https://www.hackerrank.com/",
  },
  {
    type: "svg",
    image: <SiLeetcode />,
    name: "LeetCode",
    link: "https://leetcode.com/",
  },
  {
    type: "svg",
    image: <SiGeeksforgeeks />,
    name: "GFG",
    link: "https://www.geeksforgeeks.org/",
  },
  {
    type: "svg",
    image: <TbBrandCpp />,
    name: "CPP ref",
    link: "https://en.cppreference.com/w/",
  },
  {
    type: "svg",
    image: <SiCodechef />,
    name: "CodeChef",
    link: "https://www.codechef.com/",
  },
  {
    type: "svg",
    image: <GiHorseHead />,
    name: "Atcode",
    link: "https://atcoder.jp/",
  },
  {
    type: "svg",
    image: <SiHackerearth />,
    name: "Hackerearth",
    link: "https://www.hackerearth.com/",
  },
  {
    type: "svg",
    image: <SiCodeforces />,
    name: "CodeForces",
    link: "https://codeforces.com/",
  },
];

const youtubeChannels = [
  {
    type: "svg",
    image: <FaFreeCodeCamp />,
    name: "FCC",
    link: "https://www.freecodecamp.org/news/free-online-programming-cs-courses/",
  },
  {
    type: "svg",
    image: <DiTerminal />,
    name: "Tysc",
    link: "https://teachyourselfcs.com/",
  },
  {
    type: "svg",
    image: <TbCodeAsterix />,
    name: "Code SbS",
    link: "https://www.youtube.com/@codestepbystep",
  },
  {
    type: "svg",
    image: <DiJsBadge/>,
    name: "JS 30",
    link: "https://javascript30.com/",
  },
  {
    type: "svg",
    image: <DiReact />,
    name: "Web Dev",
    link: "https://github.com/markodenic/web-development-resources",
  },
  {
    type: "svg",
    image: <SiFigma />,
    name: "Figma",
    link: "https://www.figma.com/",
  },
  {
    type: "svg",
    image: <SiBehance />,
    name: "Behance",
    link: "https://www.behance.net/",
  },
  {
    type: "svg",
    image: <SiHtml5 />,
    name: "Frontend Practice",
    link: "https://www.frontendpractice.com/",
  },
];
    

function ResourceItem({ item }) {
  return (
    <a href={item.link} target="_blank" className="resourceLinkItem">
      <div className="itemImg">
        {item.type == "image" ? (
          <img src={item.image} className="resourceImg" alt={item.name} />
        ) : (
          <>{item.image}</>
        )}
      </div>
      <h1 className="paraMedium">{item.name}</h1>
    </a>
  );
}

function InfiniteScroller() {
  return (
    <div className="resourcesScollContainer">
      <div className="scrollContainer platformScroller">
        {[...platforms, ...platforms].map((item, idx) => {
          return <ResourceItem item={item} key={idx} />;
        })}
      </div>
      <div className="scrollContainer youtubesScroller">
        {[...youtubeChannels, ...youtubeChannels].map((item, idx) => {
          return <ResourceItem item={item} key={idx} />;
        })}
      </div>
    </div>
  );
}

export default InfiniteScroller;
