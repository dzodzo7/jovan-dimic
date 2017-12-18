import React, { Component } from "react";
import {
  Segment,
  Header,
  Responsive,
  Button,
  Divider,
  Container,
  Grid,
  Menu,
  Icon,
  Sticky,
  Card
} from "semantic-ui-react";
import "./App.css";

class App extends Component {
  state = { activeItem: "bio" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Responsive minWidth={425}>
        <Segment basic inverted>
          <Header as="h4" inverted color="grey" textAlign='right'>
            Jovan Dimic
          </Header>
        </Segment>
        <Grid>
          <Grid.Row>
          <Grid.Column width={14}>
              <Container />
            </Grid.Column>
            <Grid.Column width={2}>
              <Menu vertical borderless icon fixed='left'>
              <Menu.Item
                />
                <Menu.Item
                />
                <Menu.Item
                />
                <Menu.Item
                  name="bio"
                  active={activeItem === "bio"}
                  onClick={this.handleItemClick}
                >
                  <Icon name="home" size="large" />
                </Menu.Item>
                <Menu.Item
                  name="pics"
                  active={activeItem === "pics"}
                  onClick={this.handleItemClick}
                >
                  <Icon name="user" size="large" />
                </Menu.Item>
                <Menu.Item
                  name="companies"
                  active={activeItem === "companies"}
                  onClick={this.handleItemClick}
                >
                  <Icon name="student" size="large" />
                </Menu.Item>
                <Menu.Item
                  name="links"
                  active={activeItem === "links"}
                  onClick={this.handleItemClick}
                >
                  <Icon name="cogs" size="large" />
                </Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    );
  }
}

export default App;
