import React, { useRef, useEffect, useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

const arr = [
  {
    name: "Sports Club",
    show: "block",
    url: "https://source.unsplash.com/WLUHO9A_xik/1440x960",
  },
  {
    name: "Dance Club",
    show: "none",
    url: "https://source.unsplash.com/DNE9iZ1Kqzk/1440x960",
  },
  {
    name: "Singing Club",
    show: "none",
    url: "https://source.unsplash.com/6ccJQ5qPFvY/1440x960",
  },
  {
    name: "Robotics Club",
    show: "none",
    url: "https://source.unsplash.com/qTLyiHW1nIc/1440x960",
  },
  {
    name: "Coding Club",
    show: "none",
    url: "https://source.unsplash.com/fxX__3GRtsg/1440x960",
  },
];

export default function Carousel() {
  const [value, setValue] = React.useState(1);
  const [delay, setDelay] = React.useState(5000);
  const [text, setText] = React.useState("");
  const handleChange = (e) => {
    if (e.target.id === "+") {
      value === 4 ? setValue(0) : setValue(value + 1);
      arr.map((i) => {
        return (i.show = "none");
      });
      arr[value].show = "block";
    } else if (e.target.id === "-") {
      if (value - 1 === -1) {
        setValue(4);
      } else {
        setValue(value - 1);
      }
      arr.map((i) => {
        return (i.show = "none");
      });
      arr[value].show = "block";
    }
  };
  useInterval(() => {
    value === 4 ? setValue(1) : setValue(value + 1);
    arr.map((i) => {
      return (i.show = "none");
    });
    arr[value].show = "block";
  }, delay);
  return (
    <>
      <Link href="/">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text color="#ffffff" w="auto" h="auto" position="absolute">
            {text}
          </Text>
          {arr.map((item, key) => {
            return (
              <Box
                onMouseEnter={() => {
                  setText("View Profile");
                }}
                onMouseLeave={() => {
                  setText("");
                }}
                className="carouselpic"
                _hover={{
                  cursor: "pointer",
                  opacity: "1",
                  backgroundBlendMode: "overlay",
                }}
                shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                backgroundColor="#222"
                backgroundImage={`url(${item.url})`}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                width="23vw"
                height="10rem"
                display={item.show}
                key={key}
                borderRadius="2vw 2vw 0 0"
              ></Box>
            );
          })}
        </div>
      </Link>
      <Flex height="3rem" justify="space-between" alignItems="center">
        <Button
          h="2rem"
          bg="#ddd"
          w="2vw"
          borderRadius="0 2vw 2vw 2vw"
          _hover={{ bg: "#600008" }}
          _active={{ bg: "#fff" }}
          style={{
            fontWeight: "bold",
            color: "#ffffff",
            fontSize: "max(1.5vw , 25px)",
          }}
          onClick={handleChange}
          id="-"
        >{`<`}</Button>
        {arr.map((item, key) => {
          if (item.show === "block")
            return (
              <Text
                key={key}
                fontStyle="normal"
                fontWeight="light"
                fontSize="max(1.5vw , 15px)"
                color="#AE0032"
                lineHeight="22px"
                display="flex"
                alignItems="center"
                textAlign="center"
                textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              >
                {item.name}
              </Text>
            );
        })}
        <Button
          h="2rem"
          w="1vw"
          bg="#ddd"
          borderRadius="2vw 0 2vw 2vw"
          _hover={{ bg: "#600008" }}
          _active={{ bg: "#fff" }}
          style={{
            fontWeight: "bold",
            color: "#ffffff",
            fontSize: "max(1.5vw , 25px)",
          }}
          onClick={handleChange}
          id="+"
        >
          {`>`}
        </Button>
      </Flex>
    </>
  );
}
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
