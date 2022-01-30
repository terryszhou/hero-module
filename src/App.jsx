import './App.css';

import { Flex, Heading, Link, Text, Button } from '@chakra-ui/react';

export const App = () => {
  return (<>
    <section className="hero">
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
          mx={1}
          colorScheme={"red"}
          variant={"outline"}
          _hover={{
            bgColor: "rgb(212,76,70)",
            color: "white",
            border: "1px solid rgb(212,76,70)"
          }}>
          Button One
        </Button>
        <Button
          p={".5em .67em"}
          mx={1}
          colorScheme={"blue"}
          variant={"outline"}
          _hover={{
            bgColor: "rgb(73,128,200)",
            color: "white",
            border: "1px solid rgb(73,128,200)"
          }}>
          Button Two
        </Button>
      </Flex>
    </Flex>
  </>);
};
