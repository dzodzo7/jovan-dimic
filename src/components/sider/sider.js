import React, { Component } from 'react';
import { Sidebar, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";



export default class SideNav extends Component {
    state = { activeItem: "Home" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  
    render() {
      const { activeItem } = this.state;
       return (
            <Sidebar
              as={Menu}
              visible={true}
              pointing
              secondary
              vertical
            >
            
      <Menu.Item
          as={Link}
          to="/"
          name="Home"
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/about"
          name="About"
          active={activeItem === "About"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/skills"
          name="Skills"
          active={activeItem === "Skills"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/contact"
          name="Contact"
          active={activeItem === "Contact"}
          onClick={this.handleItemClick}
        />
            </Sidebar>
          );
    }
}
