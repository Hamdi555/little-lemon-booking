import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Hamdi!";
const bio1 = "A frontend developer";
const bio2 = "Specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
<VStack spacing={4}>
    <Avatar src="https://i.pravatar.cc/150?img=7" size="lg" />
    <h1> {greeting} </h1>
    <heading> {bio1} </heading>
    <heading> {bio2} </heading>
</VStack>
  </FullScreenSection>
);

export default LandingSection;
