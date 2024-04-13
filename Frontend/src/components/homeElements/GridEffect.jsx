import React from "react";
import "../homeElementCss/GridEffect.css";
import { BsStars } from "react-icons/bs";

import { useRef } from "react";

function GridEffect() {
    const gridContainer = useRef()

    const effectHandler = (idx,e) => {
        const gridEle = gridContainer.current.querySelectorAll('.gridElement')[idx];
        const x = e.pageX - gridEle.offsetLeft
        const y = e.pageY - gridEle.offsetTop
        let gridInner = gridEle.querySelectorAll('.gridInner')
        
        gridEle.style.setProperty('--x', x + 'px')
        gridEle.style.setProperty('--y', y + 'px')
        // gridInner.style.setProperty('--x', x + 'px')
        // gridInner.style.setProperty('--y', y + 'px')

    }


  return (
    <div className="gridContainer" ref={gridContainer}>
      <div className="gridElement" onMouseMove={(e) => effectHandler(0, e)} >
        <div className="gridInner ">
            <p className="paraLarge">Compete</p>
        </div>
      </div>
      <div className="gridElement"  onMouseMove={(e) => effectHandler(1, e)} >
        <div className="gridInner">
            <BsStars />
        </div>
        
      </div>
      <div className="gridElement" onMouseMove={(e) => effectHandler(2, e)}  >
        <div className="gridInner">
            <p className="paraLarge">Coding</p>
        </div>
      </div>
      <div className="gridElement" onMouseMove={(e) => effectHandler(3, e)}  >
        <div className="gridInner">
            <BsStars />
        </div>
      </div>
      <div className="gridElement" onMouseMove={(e) => effectHandler(4, e)}  >
        <div className="gridInner">
            <BsStars />
        </div>
      </div>
      <div className="gridElement"  onMouseMove={(e) => effectHandler(5, e)} >
        <div className="gridInner">
            <p className="paraLarge">Code Talks</p>
        </div>
      </div>
      <div className="gridElement"  onMouseMove={(e) => effectHandler(6, e)} >
        <div className="gridInner">
            <BsStars />
        </div>
      </div>
      <div className="gridElement"  onMouseMove={(e) => effectHandler(7, e)} >
        <div className="gridInner">
            <p className="paraLarge">Experts</p>
        </div>
      </div>
    </div>
  );
}

export default GridEffect;
