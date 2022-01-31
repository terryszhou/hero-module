import './App.css';

import { Flex, Heading, Link, Text, Button } from '@chakra-ui/react';
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
          <svg
            viewBox={"0 0 578 440"}
            style={{
              position: "absolute",
              width: "95%",
              top: "-3rem",
              zIndex: "-1",
            }}>
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
  </>);
};
