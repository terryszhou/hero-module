import './App.css';

import { Flex, Box, Heading, Link, Text, Button, Stack, Icon } from '@chakra-ui/react';
import { FaPlayCircle } from 'react-icons/fa';

export const App = () => {
  return (<>

    <section className="hero hero-cliff">
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

    <section className="hero snippy-hero">
      <h1 style={{ position: "absolute", right: 0, top: 30 }}>Standard Implementation</h1>
      <section className="snippy-hero-left">
        <header className="snippy-header">
          <h1 className="snippy-header-top">Write once,</h1>
          <h1 style={{ color: "rgb(228,110,106)" }}>use everywhere!</h1>
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
          <svg viewBox={"0 0 578 440"} className="snippy-svg">
            <path
              fillRule={"evenodd"}
              clipRule={"evenodd"}
              d={"M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"}
              fill={"rgb(253,245,245)"}
            />
          </svg>
          <div className="snippy-image">
            <FaPlayCircle className="snippy-image-icon" />
          </div>
        </div>
      </section>
    </section>

    <Flex h={"100vh"} position={"relative"}>
      <Text
        position={"absolute"}
        right={0}
        top={30}>
        Chakra Implementation
      </Text>
      <Flex
        w={"50%"}
        flexDirection={"column"}
        p={"7.5rem 1rem 7.5rem 6rem"}>
        <Stack>
          <Heading
            fontSize={"3.75rem"}
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
              backgroundColor: "rgb(228,110,106)",
              bottom: 0,
              zIndex: -1,
            }}>
            Write once,
          </Heading>
          <Heading
            color={"rgb(228,110,106)"}
            fontSize={"3.75rem"}
            fontWeight={"bold"}
            fontFamily={"PT Sans Caption"}
            lineHeight={1}>
            use everywhere!
          </Heading>
        </Stack>
        <Text color={"rgb(116,127,148)"} marginTop={"3rem"}>
          Snippy is a rich coding snippets app that lets you create your own code snippets, categorize them, and even sync them in the cloud so you can use them anywhere. All that is free!
        </Text>
        <Flex marginTop={"3rem"}>
          <Button
            fontSize={18}
            fontWeight={"normal"}
            color={"white"}
            p={".6rem 1.25rem"}
            borderRadius={25}
            marginRight={"1rem"}
            bgColor={"rgb(228,110,106)"}
            _hover={{ filter: "brightness(1.2)" }}>
            Get started
          </Button>
          <Button
            fontSize={18}
            fontWeight={"normal"}
            color={"black"}
            p={".6rem 1.25rem"}
            borderRadius={25}
            bgColor={"rgb(238,242,247)"}
            leftIcon={<FaPlayCircle color={"rgb(205,213,223)"} />}>
            How It Works
          </Button>
        </Flex>
      </Flex>
      <Flex
        w={"50%"}
        flexDirection={"column"}
        alignItems={"center"}
        padding={"15vh 5rem 0 .5rem"}
        position={"relative"}
      >
        <Stack
          position={"relative"}
          width={"100%"}>
          <Icon
            viewBox={"0 0 578 440"}
            position={"absolute"}
            top={"-7rem"}
            left={"2rem"}
            z-index={"-1"}
            boxSize={"40vw"}>
            <path
              d={"M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"}
              fill={"rgb(253,245,245)"}
            />
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
            alignItems={"center"}
          >

          </Flex>
        </Stack>

      </Flex>

    </Flex>
  </>);
};
