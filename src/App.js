import React, { Component } from "react";
import { MenuDesktop, MenuMobile, Footer } from "./components/menu";
import { Route, Switch } from "react-router-dom";
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
  Card,
  Item,
  Image,
  Transition,
  Label
} from "semantic-ui-react";
import {
  Home,
  About,
  Skills,
  Contact,
  Projects
} from "./components/mainContent/content";
import SideNav from "./components/sider/sider";
import "./App.css";

class App extends Component {
  // state = { activeItem: "bio" };
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    //const { activeItem } = this.state;
    return (
      <div>
        <Responsive minWidth={425}>
          <Grid>
            <Grid.Row style={{ height: "95vh" }}>
              <Grid.Column textAlign="center" verticalAlign="middle" width={3}>
                <MenuDesktop />
              </Grid.Column>
              <Grid.Column textAlign="left" verticalAlign="middle" width={13}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/skills" component={Skills} />
                  <Route path="/projects" component={Projects} />
                  {/* <Route path="/contact" component={Contact} /> */}
                </Switch>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ height: "5vh" }}>
            <Grid.Column width={13}>
              <Footer />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          
        </Responsive>
        <Responsive maxWidth={424}>
          <MenuMobile />
          <Grid textAlign="center" style={{ height: "95vh" }}>
            <Grid.Row >
              <Grid.Column textAlign="left" verticalAlign="top" width={16}>
                <br />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/skills" component={Skills} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/contact" component={Contact} />
                </Switch>
              </Grid.Column>
            </Grid.Row>
            </Grid>
            <Grid style={{ height: "5vh" }}>
            <Grid.Row >
            <Grid.Column width={13}>
              <Footer />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
      </div>
    );
  }
}

export default App;
