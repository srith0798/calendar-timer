import React, { useEffect, useState } from "react";
import moment from "moment";
import Carousel from "@itseasy21/react-elastic-carousel";
import styled from "styled-components";

const DotContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: 11px;
`;

const Dot = styled.p`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.active ? "#000" : "transparent")};
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;
`;

function Home() {
  const [timerSeconds, setTimerSeconds] = useState(360);
  const [action, setAction] = useState(false);
  const items = [1, 2, 3];
  useEffect(() => {
    let intervalID;
    if (action) {
      intervalID = setInterval(() => {
        if (timerSeconds > 0) {
          setTimerSeconds((pre) => pre - 1);
        } else {
          clearInterval(intervalID);
        }
      }, 1000);
    } else {
      setTimerSeconds(360);
    }

    return () => {
      clearInterval(intervalID);
    };
  }, [action, timerSeconds]);

  return (
    <div>
      <h1>Home {timerSeconds}</h1>
      <div style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
        <div>
          <span>0{moment.duration(timerSeconds, "s").hours()}</span>
          <p>hours</p>
        </div>
        <div>
          <span>
            {moment.duration(timerSeconds, "s").minutes() < 10
              ? `0${moment.duration(timerSeconds, "s").minutes()}`
              : moment.duration(timerSeconds, "s").minutes()}
          </span>
          <p>minutes</p>
        </div>
        <div>
          <span>{moment.duration(timerSeconds, "s").seconds()}</span>
          <p>seconds</p>
        </div>
      </div>

      <button
        onClick={() => {
          setAction(true);
        }}
      >
        CLick
      </button>
      <button
        onClick={() => {
          setAction(false);
        }}
      >
        Reset
      </button>
      <Carousel
        showArrows={false}
        enableAutoPlay
        autoPlaySpeed={2000}
        renderPagination={({ pages, activePage, onClick }) => {
          return (
            <DotContainer direction="row">
              {pages.map((page) => {
                const isActivePage = activePage === page;
                return (
                  <Dot
                    key={page}
                    onClick={() => onClick(page)}
                    active={isActivePage}
                  />
                );
              })}
            </DotContainer>
          );
        }}
      >
        {items.map((id) => (
          <div key={id}>{id}</div>
        ))}
      </Carousel>
    </div>
  );
}

export default Home;
