import React, { Component } from "react";
import { Menu, Icon, Divider, Button, Label } from "semantic-ui-react";
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
        <Icon name='home' />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/about"
          name="About"
          active={activeItem === "About"}
          onClick={this.handleItemClick}
          >
        <Icon name='info' />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/skills"
          name="Skills"
          active={activeItem === "Skills"}
          onClick={this.handleItemClick}
          >
        <Icon name='code' />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/projects"
          name="Projects"
          active={activeItem === "Projects"}
          onClick={this.handleItemClick}
          >
        <Icon name='settings' />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/contact"
          name="Contact"
          active={activeItem === "Contact"}
          onClick={this.handleItemClick}
          >
        <Icon name='mail' />
        </Menu.Item>
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
      <Menu fixed='top' style={{backgroundColor:'white'}} icon pointing secondary size="large" widths={5}>
      <Menu.Item
          as={Link}
          to="/"
          name="Home"
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
        >
        <Icon name='home' />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/about"
          name="About"
          active={activeItem === "About"}
          onClick={this.handleItemClick}
          >
        <Icon name='info' />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/skills"
          name="Skills"
          active={activeItem === "Skills"}
          onClick={this.handleItemClick}
          >
        <Icon name='code' />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/projects"
          name="Projects"
          active={activeItem === "Projects"}
          onClick={this.handleItemClick}
          >
        <Icon name='settings' />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/contact"
          name="Contact"
          active={activeItem === "Contact"}
          onClick={this.handleItemClick}
          >
        <Icon name='mail' />
        </Menu.Item>
      </Menu>
    );
  }
}
const Footer = props => (<Menu fixed='bottom' inverted icon borderless size="tiny">
<Menu.Item >
  <Icon name='github' inverted color='grey'/>
  </Menu.Item>
  <Menu.Item >
  <Icon name='instagram' inverted color='grey'/>
  </Menu.Item>
  <Menu.Item >
  <Icon name='facebook' inverted color='grey'/>
  </Menu.Item>
  <Menu.Menu position='right'>
  <Menu.Item >
  <Icon name='copyright' inverted color='grey'/>
  Jovan Dimic
  </Menu.Item>
    
  </Menu.Menu>
</Menu>
);
export {MenuDesktop, MenuMobile, Footer};