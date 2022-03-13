import { Flex, Heading, Link, Text, Button, Box, Stack, Icon, IconButton, HStack, VStack } from '@chakra-ui/react';
import React, { useRef, useState, useEffect } from 'react';

import { FaPlayCircle } from 'react-icons/fa';

import './App.css';

export const App = () => {
  const refOne = useRef();
  const refTwo = useRef();
  const refThree = useRef();
  const refFour = useRef();
  const refFive = useRef();
  const [scrolled, setScrolled] = useState();

  const listenScrollEvent = () => {
    if (window.scrollY >= 820) {
      setScrolled(true);
    } else {
      setScrolled(false);
    };
  };

  useEffect(() => {
    listenScrollEvent();
    window.addEventListener("scroll", listenScrollEvent)
  }, []);

  return (<>
    <VStack
      position={"fixed"}
      bottom={5}
      right={5}
      zIndex={2}
      opacity={0.7}>
      <Button
        w={"100%"}
        bgColor={scrolled && "black"}
        color={scrolled && "white"}
        onClick={() => refOne.current.scrollIntoView({ behavior: "smooth" })}>
        Standard Full
      </Button>
      <Button
        w={"100%"}
        bgColor={scrolled && "black"}
        color={scrolled && "white"}
        onClick={() => refTwo.current.scrollIntoView({ behavior: "smooth" })}>
        Chakra Full
      </Button>
      <Button
        w={"100%"}
        bgColor={scrolled && "black"}
        color={scrolled && "white"}
        onClick={() => refThree.current.scrollIntoView({ behavior: "smooth" })}>
        Standard Side
      </Button>
      <Button
        w={"100%"}
        bgColor={scrolled && "black"}
        color={scrolled && "white"}
        onClick={() => refFour.current.scrollIntoView({ behavior: "smooth" })}>
        Chakra Side
      </Button>
      <Button
        w={"100%"}
        bgColor={scrolled && "black"}
        color={scrolled && "white"}
        onClick={() => refFive.current.scrollIntoView({ behavior: "smooth" })}>
        Color Schemes
      </Button>
    </VStack>

    <section className="hero hero-cliff" ref={refOne}>
      <header className="header">
        <a className="logo" href="https://google.com">logo</a>
        <nav>Standard Implementation</nav>
      </header>
      <h1 className="hero-title">The Title of this Hero Module</h1>
      <footer className="hero-footer">
        <button className="button button-primary">Button One</button>
        <button className="button">Button Two</button>
      </footer>
    </section>

    <Flex
      ref={refTwo}
      h={"100vh"}
      p={"1em"}
      boxSizing={"border-box"}
      color={"white"}
      flexDir={"column"}
      justifyContent={"space-between"}
      bgImage={"url(https://images.unsplash.com/photo-1500417148159-68083bd7333a)"}
      bgPos={"center"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Link
          href="https://google.com"
          fontSize={"5vh"}
          fontWeight={"bold"}>
          logo
        </Link>
        <Text>Chakra Implementation</Text>
      </Flex>
      <Heading fontSize={"9vh"} fontWeight={"bold"}>
        The Title of this Hero Module
      </Heading>
      <Flex marginBottom={"1em"}>
        <Button
          p={".5em .67em"}
          border={".1em solid white"}
          bgColor={"white"}
          color={"black"}
          borderRadius={0}
          _hover={{
            bgColor: "black",
            color: "white",
          }}>
          Button One
        </Button>
        <Button
          p={".5em .67em"}
          border={".1em solid white"}
          bgColor={"transparent"}
          borderRadius={0}
          _hover={{
            bgColor: "black",
            color: "white",
          }}>
          Button Two
        </Button>
      </Flex>
    </Flex>

    <section className="hero snippy-hero" ref={refThree}>
      <h1 style={{ position: "absolute", right: 10, top: 30 }}>Standard Implementation</h1>
      <section className="snippy-hero-left">
        <header className="snippy-header">
          <h1 className="snippy-header-top">Write once,</h1>
          <h1 style={{ color: "rgb(248,110,106)" }}>use everywhere!</h1>
        </header>
        <p className="snippy-paragraph">Snippy is a rich coding snippets app that lets you create your own code snippets, categorize them, and even sync them in the cloud so you can use them anywhere. All that is free!</p>
        <div className="snippy-button-box">
          <button className="snippy-button snippy-button-primary">
            Get started
          </button>
          <button className="snippy-button snippy-button-secondary">
            <FaPlayCircle className="snippy-button-icon" />
            How It Works
          </button>
        </div>
      </section>
      <section className="snippy-hero-right">
        <div style={{ position: "relative", width: "100%" }}>
          <svg viewBox={"0 0 100 100"} className="snippy-svg">
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop id="stop1" stop-color="rgba(248,127,155,1)" offset="0%" />
                <stop id="stop2" stop-color="rgba(251,228,31,1)" offset="100%" />
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient)"
              d="M21.1,-31.9C26.4,-29.3,29.4,-22,31,-15.1C32.7,-8.2,33,-1.7,30.3,3.1C27.6,7.9,21.9,10.9,18,15.7C14.1,20.5,12,27.1,7.3,31.4C2.7,35.7,-4.5,37.8,-9.6,35.2C-14.7,32.6,-17.7,25.2,-23.1,19.6C-28.6,14,-36.6,10.2,-39,4.6C-41.3,-1,-38.1,-8.5,-33.2,-13.5C-28.3,-18.6,-21.8,-21.2,-16,-23.6C-10.2,-26,-5.1,-28.2,1.4,-30.3C7.8,-32.4,15.7,-34.5,21.1,-31.9Z"
              width="100%"
              height="100%"
              transform="translate(50 50)" />
          </svg>
          <div className="snippy-image">
            <FaPlayCircle className="snippy-image-icon" />
          </div>
        </div>
      </section>
    </section>

    <Flex
      ref={refFour}
      h={"100vh"}
      position={"relative"}
      flexDirection={{ base: "column", lg: "row" }}>
      <Text
        position={"absolute"}
        right={10}
        top={30}>
        Chakra Implementation
      </Text>
      <Flex
        w={{ base: "100%", lg: "50%" }}
        flexDirection={"column"}
        p={{ base: "2rem", lg: "7.5rem 1rem 7.5rem 6rem" }}>
        <Stack marginTop={{ base: "1.5rem" }}>
          <Heading
            fontSize={{ base: "2rem", lg:"3.75rem" }}
            fontWeight={"bold"}
            fontFamily={"PT Sans Caption"}
            lineHeight={1}
            position={"relative"}
            width={"fit-content"}
            _before={{
              position: "absolute",
              content: `""`,
              height: "35%",
              width: "100%",
              background: "linear-gradient(to right, rgba(248,127,155,1), rgba(251,228,31,1))",
              bottom: 0,
              zIndex: -1,
              transform: "perspective(200px) rotateX(40deg)",
              borderRadius: "8px",
            }}>
            Write once,
          </Heading>
          <Heading
            color={"rgb(248,110,106)"}
            fontSize={{ base: "2rem", lg: "3.75rem" }}
            fontWeight={"bold"}
            fontFamily={"PT Sans Caption"}
            lineHeight={1}>
            use everywhere!
          </Heading>
        </Stack>
        <Text color={"rgb(116,127,148)"} marginTop={{md: "1.5rem", lg: "3rem"}}>
          Snippy is a rich coding snippets app that lets you create your own code snippets, categorize them, and even sync them in the cloud so you can use them anywhere. All that is free!
        </Text>
        <Flex
          marginTop={{ base: "1.5rem", lg: "3rem" }}
          flexDirection={{ base: "column", sm: "row" }}>
          <Button
            fontSize={18}
            fontWeight={"normal"}
            color={"white"}
            px={"1.25rem"}
            borderRadius={25}
            bgColor={"rgb(248,110,106)"}
            marginRight={"1rem"}
            marginBottom={{ base: "1rem", sm: "inherit" }}
            w={{ base: "100%", sm: "inherit" }}
            _hover={{ filter: "brightness(1.2)" }}>
            Get started
          </Button>
          <Button
            fontSize={18}
            fontWeight={"normal"}
            color={"black"}
            px={"1.25rem"}
            borderRadius={25}
            bgColor={"rgb(238,242,247)"}
            w={{ base: "100%", sm: "inherit" }}
            leftIcon={<FaPlayCircle color={"rgb(205,213,223)"} />}>
            How It Works
          </Button>
        </Flex>
      </Flex>
      <Flex
        w={{ base: "100%", lg: "50%" }}
        flexDirection={"column"}
        alignItems={"center"}
        padding={{ base: "0rem 0rem 4rem 2rem", lg: "15vh 5rem 0 .5rem" }}
        position={"relative"}>
        <Stack
          position={"relative"}
          width={"100%"}>
          <Icon
            viewBox={"0 0 100 100"}
            position={"absolute"}
            top={{ base: "-18vw", lg: "-10vw" }}
            zIndex={"-1"}
            boxSize={{ base: "90vw", lg: "45vw" }}>
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop id="stop1" stop-color="rgba(248, 127, 155, 1)" offset="0%" />
                <stop id="stop2" stop-color="rgba(251, 228, 31, 1)" offset="100%" />
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient)"
              d="M21.1,-31.9C26.4,-29.3,29.4,-22,31,-15.1C32.7,-8.2,33,-1.7,30.3,3.1C27.6,7.9,21.9,10.9,18,15.7C14.1,20.5,12,27.1,7.3,31.4C2.7,35.7,-4.5,37.8,-9.6,35.2C-14.7,32.6,-17.7,25.2,-23.1,19.6C-28.6,14,-36.6,10.2,-39,4.6C-41.3,-1,-38.1,-8.5,-33.2,-13.5C-28.3,-18.6,-21.8,-21.2,-16,-23.6C-10.2,-26,-5.1,-28.2,1.4,-30.3C7.8,-32.4,15.7,-34.5,21.1,-31.9Z"
              width="100%"
              height="100%"
              transform="translate(50 50)" />
          </Icon>
          <Flex
            bgImage={"url(https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80)"}
            bgPosition={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            w={"95%"}
            h={"40vh"}
            borderRadius={"15px"}
            position={"absolute"}
            top={"10px"}
            boxShadow={"xl"}
            justifyContent={"center"}
            alignItems={"center"}>
            <IconButton
              as={"icon"}
              icon={<FaPlayCircle />}
              color={"white"}
              fontSize={"3rem"}
              borderRadius={"50%"}
              bgColor={"transparent"} />
          </Flex>
        </Stack>
      </Flex>
    </Flex>

    <Flex
      alignItems={"center"}
      flexDirection={"column"}
      h={"100%"}
      ref={refFive}>
      <HStack w={"80%"}>
        <Text>1</Text>
        <VStack w={"100%"}>
          <Box 
            bg={`linear-gradient(
              to right,
              rgba(44,44,44,1),
              rgba(248,127,155,1),
              rgba(251,228,31,1)
            )`}
            borderRadius={15}
            h={20}
            m={2}
            w={"80%"} />
          <HStack h={20} w={"80%"}>
            <Box
              bg={"rgba(44,44,44,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
            <Box
              bg={"rgba(244,244,244,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
            <Box
              bg={"rgba(248,127,155,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
            <Box
              bg={"rgba(255,169,118,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
            <Box
              bg={"rgba(251,228,31,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
          </HStack>
        </VStack>
      </HStack>
      <HStack w={"80%"}>
        <Text>2</Text>
        <VStack w={"100%"}>
          <Box 
            bg={`linear-gradient(
              to right,
              rgba(44,44,44,1),
              rgba(130,104,235,1),
              rgba(248,127,155,1),
              rgba(251,228,31,1)
            )`}
            borderRadius={15}
            h={20}
            m={2}
            w={"80%"} />
          <HStack h={20} w={"80%"}>
            <Box
              bg={"rgba(44,44,44,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
            <Box
              bg={"rgba(244,244,244,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
            <Box
              bg={"rgba(130,104,235,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
            <Box
              bg={"rgba(248,127,155,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
            <Box
              bg={"rgba(251,228,31,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
          </HStack>
        </VStack>
      </HStack>
      <HStack w={"80%"}>
        <Text>3</Text>
        <VStack w={"100%"}>
          <Box 
            bg={`linear-gradient(
              to right,
              rgba(44,44,44,1),
              rgba(130,104,235,1),
              rgba(210,152,183,1),
              rgba(237,128,93,1)
            )`}
            borderRadius={15}
            h={20}
            m={2}
            w={"80%"} />
          <HStack h={20} w={"80%"}>
            <Box
              bg={"rgba(44,44,44,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
            <Box
              bg={"rgba(244,244,244,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
            <Box
              bg={"rgba(130,104,235,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
            <Box
              bg={"rgba(210,152,183,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
            <Box
              bg={"rgba(237,128,93,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
          </HStack>
        </VStack>
      </HStack>
      <HStack w={"80%"}>
        <Text>4</Text>
        <VStack w={"100%"}>
          <Box 
            bg={`linear-gradient(
              to right,
              rgba(44,44,44,1),
              rgba(73,159,91,1),
              rgba(251,208,71,1),
              rgba(154,25,63,1)
            )`}
            borderRadius={15}
            h={20}
            m={2}
            w={"80%"} />
          <HStack h={20} w={"80%"}>
            <Box
              bg={"rgba(44,44,44,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
            <Box
              bg={"rgba(244,244,244,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
            <Box
              bg={"rgba(73,159,91,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
            <Box
              bg={"rgba(251,208,71,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
            <Box
              bg={"rgba(154,25,63,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
          </HStack>
        </VStack>
      </HStack>
      <HStack w={"80%"}>
        <Text>5</Text>
        <VStack w={"100%"}>
          <Box 
            bg={`linear-gradient(
              to right,
              rgba(44,44,44,1),
              rgba(65,245,173,1),
              rgba(251,208,111,1),
              rgba(248,127,155,1)
            )`}
            borderRadius={15}
            h={20}
            m={2}
            w={"80%"} />
          <HStack h={20} w={"80%"}>
            <Box
              bg={"rgba(44,44,44,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
            <Box
              bg={"rgba(244,244,244,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
            <Box
              bg={"rgba(65,245,173,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
            <Box
              bg={"rgba(251,208,111,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
            <Box
              bg={"rgba(248,127,155,1)"}
              borderRadius={15}
              h={"100%"}
              w={20} />
          </HStack>
        </VStack>
      </HStack>
    </Flex>
  </>);
};
