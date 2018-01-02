import React, { Component } from "react";
import {
  Segment,
  Header,
  Transition,
  Image,
  Card,
  Container,
  Divider,
  Button,
  Icon
} from "semantic-ui-react";
import "./content.css";

const Home = props => (
  <Container textAlign="justified">
    <Header as="h1">Hi,<br/>I'm Jovan</Header>
    <p>
      From house Dimic, city Zrenjanin, state Serbia. Self-taught Java, web developer. Aviation lover. Half-marathon runner.
    </p>
    <Image
      spaced="left"
      size="medium"
      floated="right"
      src="http://api.thumbr.io/b82f33c7b70b85b978ff2e16f1512abd/KhPZbWboUluRxv8PG87L/https%3A%2F%2Fwww.freepik.com/blog/wp-content/uploads/2017/01/01previa-1.jpg/900x/thumb.png"
    />
  </Container>
);

const About = props => (
  <Container textAlign="justified">
    <Header as="h1">About</Header>
    <p>
      Aenean vitae eros cursus, accumsan urna at, convallis enim. Fusce interdum
      augue cursus sem ultricies, at efficitur nibh cursus. Aliquam in mollis
      arcu, in ultricies mauris. Sed posuere ac ex vel fringilla. Curabitur
      congue rhoncus porttitor.
      <br />
      Curabitur elementum commodo est nec fringilla. Cras a ipsum egestas,
      interdum enim vitae, feugiat ex. Pellentesque ultricies finibus libero, ac
      euismod magna ultrices id. Nullam rutrum hendrerit odio et vestibulum.
      Pellentesque vel ornare est. Cras feugiat ante justo, vel malesuada metus
      interdum ac. Cras ut lacus eu ante commodo auctor sollicitudin at purus.
    </p>
    <Image
      spaced="left"
      size="medium"
      floated="right"
      src="http://api.thumbr.io/b82f33c7b70b85b978ff2e16f1512abd/KhPZbWboUluRxv8PG87L/https%3A%2F%2Fwww.freepik.com/blog/wp-content/uploads/2017/01/01previa-1.jpg/900x/thumb.png"
    />
  </Container>
);

const Skills = props => (
  <Container textAlign="justified">
    <Header as="h1">Skills</Header>
    <p>
      Mauris porta leo augue, vel bibendum ante feugiat nec. Quisque placerat
      nulla sed ex tincidunt, vel cursus libero congue. In a elit sit amet leo
      dapibus.
    </p>
    <Image
      spaced="left"
      size="medium"
      floated="right"
      src="http://api.thumbr.io/b82f33c7b70b85b978ff2e16f1512abd/KhPZbWboUluRxv8PG87L/https%3A%2F%2Fwww.freepik.com/blog/wp-content/uploads/2017/01/01previa-1.jpg/900x/thumb.png"
    />
  </Container>
);

const Contact = props => (
  <Container textAlign="justified">
    <Header as="h1">Contact</Header>
    <Button
      basic
      color='black'
      size="massive"
      as="a"
      href="mailto:jovan.dzo@gmail.com"
      target="_blank"
    >
      Email Me
    </Button>
    <br/>
    <Image
      spaced="left"
      size="medium"
      floated="right"
      src="http://api.thumbr.io/b82f33c7b70b85b978ff2e16f1512abd/KhPZbWboUluRxv8PG87L/https%3A%2F%2Fwww.freepik.com/blog/wp-content/uploads/2017/01/01previa-1.jpg/900x/thumb.png"
    />
  </Container>
);
const Projects = props => (
  <Container textAlign="justified">
    <Header as="h1">Projects</Header>
    <p>
      Mauris porta leo augue, vel bibendum ante feugiat nec. Quisque placerat
      nulla sed ex tincidunt, vel cursus libero congue. In a elit sit amet leo
      dapibus.
    </p>
    <Image
      spaced="left"
      size="medium"
      floated="right"
      src="http://api.thumbr.io/b82f33c7b70b85b978ff2e16f1512abd/KhPZbWboUluRxv8PG87L/https%3A%2F%2Fwww.freepik.com/blog/wp-content/uploads/2017/01/01previa-1.jpg/900x/thumb.png"
    />
  </Container>
);
export { Home, About, Skills, Contact, Projects };
