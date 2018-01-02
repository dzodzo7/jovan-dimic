import React, { Component } from "react";
import { Menu, Icon, Divider, Button, Label, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

class MenuDesktop extends Component {
  state = { activeItem: "Home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu icon pointing secondary fluid size="massive" vertical>
        <Menu.Item
          as={Link}
          to="/"
          name="Home"
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
        >
          <Icon name="home" />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/about"
          name="About"
          active={activeItem === "About"}
          onClick={this.handleItemClick}
        >
          <Icon name="info" />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/skills"
          name="Skills"
          active={activeItem === "Skills"}
          onClick={this.handleItemClick}
        >
          <Icon name="settings" />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/projects"
          name="Projects"
          active={activeItem === "Projects"}
          onClick={this.handleItemClick}
        >
          <Icon name="grid layout" />
        </Menu.Item>
        {/* <Menu.Item
          as={Link}
          to="/contact"
          name="Contact"
          active={activeItem === "Contact"}
          onClick={this.handleItemClick}
        >
          <Icon name="mail" />
        </Menu.Item> */}
      </Menu>
    );
  }
}

class MenuMobile extends Component {
  state = { activeItem: "Home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu
        fixed="top"
        style={{ backgroundColor: "white" }}
        icon
        pointing
        secondary
        size="large"
        widths={4}
      >
        <Menu.Item
          as={Link}
          to="/"
          name="Home"
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
        >
          <Icon name="home" />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/about"
          name="About"
          active={activeItem === "About"}
          onClick={this.handleItemClick}
        >
          <Icon name="info" />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/skills"
          name="Skills"
          active={activeItem === "Skills"}
          onClick={this.handleItemClick}
        >
          <Icon name="settings" />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/projects"
          name="Projects"
          active={activeItem === "Projects"}
          onClick={this.handleItemClick}
        >
          <Icon name="grid layout" />
        </Menu.Item>
        {/* <Menu.Item
          as={Link}
          to="/contact"
          name="Contact"
          active={activeItem === "Contact"}
          onClick={this.handleItemClick}
        >
          <Icon name="mail" />
        </Menu.Item> */}
      </Menu>
    );
  }
}
const Footer = props => (
  <Menu fixed="bottom" widths={1} inverted icon borderless size="small">
  {/* <Menu.Item>
    <Menu.Menu as={Menu} inverted > 
      <Menu.Item as='a' href='#'>
        <Icon name="github" inverted color="grey" />
      </Menu.Item>
      <Menu.Item as='a' href='#'>
        <Icon name="instagram" inverted color="grey" />
      </Menu.Item>
      <Menu.Item as='a' href='#'>
        <Icon name="facebook" inverted color="grey" />
      </Menu.Item>
    </Menu.Menu>
    </Menu.Item> */}
    <Menu.Item>
      <Button
        inverted
        color='grey'
        basic
        as="a"
        href="mailto:jovan.dzo@gmail.com"
        target="_blank"
      >
        Email Me
      </Button>
    </Menu.Item>
    {/* <Menu.Item>
      <Icon name="copyright" inverted color="grey" />
      Jovan Dimic
    </Menu.Item> */}
  </Menu>
);
export { MenuDesktop, MenuMobile, Footer };
