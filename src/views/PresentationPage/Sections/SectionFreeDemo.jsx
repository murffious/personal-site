import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui icons
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";

import freeDemoStyle from "assets/jss/material-kit-pro-react/views/presentationSections/freeDemoStyle.jsx";

class SectionFreeDemo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={5}
              sm={8}
              className={`${classes.mlAuto} ${classes.mrAuto}`}
            >
              <div className={classes.iconGithub}>
                <div className="fab fa-github" />
              </div>
              <div>
                <h2 className={classes.title}>Modern Tech Expertise</h2>
                <h5 className={classes.description}>
                  Do you want to test and see the benefits of this kit before
                  purchasing it? You can give the demo version a try. It
                  features enough basic components for you to get a feel of the
                  design and also test the quality of the code. Get it free on
                  GitHub!
                </h5>
              </div>
              <Button
                href="https://demos.creative-tim.com/material-kit-react/#/"
                color="rose"
                target="_blank"
                round
              >
                ❤️ View Resume ❤️
              </Button>
            </GridItem>
            <GridItem md={6} sm={12} className={classes.mlAuto}>
              <GridContainer>
                <GridItem md={6} sm={6}>
                  <Card
                    className={classNames(classes.card, classes.cardPricing)}
                  >
                    <CardBody>
                      <h3 className={classes.cardTitle}>Front End</h3>
                      <ul>
                        <li>
                          <b>60</b> React Redux conext/Hooks
                        </li>
                        <li>
                          <b>3</b>
                          AngualrJS
                        </li>
                        <li>
                          <Close
                            className={classNames(
                              classes.cardIcons,
                              classes.dangerColor
                            )}
                          />{" "}
                          BootStrap /Jquery/ Material UI
                        </li>
                        <li>
                          <Close
                            className={classNames(
                              classes.cardIcons,
                              classes.dangerColor
                            )}
                          />{" "}
                          Sections
                        </li>
                        <li>
                          <Close
                            className={classNames(
                              classes.cardIcons,
                              classes.dangerColor
                            )}
                          />{" "}
                          Responsive/ Accesiblity
                        </li>
                        <li>
                          <Close
                            className={classNames(
                              classes.cardIcons,
                              classes.dangerColor
                            )}
                          />{" "}
                          Data Flow Master - UI UX focused
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem md={6} sm={6}>
                  <Card
                    className={classNames(classes.card, classes.cardPricing)}
                  >
                    <CardBody>
                      <h3 className={classes.cardTitle}>Back End</h3>
                      <ul>
                        <li>
                          <b>1000+</b> MCV
                        </li>
                        <li>
                          <b>12</b> Security
                        </li>
                        <li>
                          <Check
                            className={classNames(
                              classes.cardIcons,
                              classes.successColor
                            )}
                          />{" "}
                          Documentaion Swagger
                        </li>
                        <li>
                          <Check
                            className={classNames(
                              classes.cardIcons,
                              classes.successColor
                            )}
                          />{" "}
                          OOP Pirniciples SOLID
                        </li>
                        <li>
                          <Check
                            className={classNames(
                              classes.cardIcons,
                              classes.successColor
                            )}
                          />{" "}
                          Node+Express APIs
                        </li>
                        <li>
                          <Check
                            className={classNames(
                              classes.cardIcons,
                              classes.successColor
                            )}
                          />{" "}
                          MongoDB or SQL (Postgres & MSSQL)
                        </li>
                        <li>
                          <Check
                            className={classNames(
                              classes.cardIcons,
                              classes.successColor
                            )}
                          />{" "}
                          Php
                        </li>
                        <li>
                          <Check
                            className={classNames(
                              classes.cardIcons,
                              classes.successColor
                            )}
                          />{" "}
                          C# Wep API Microservice
                        </li>
                        <li>
                          <Check
                            className={classNames(
                              classes.cardIcons,
                              classes.successColor
                            )}
                          />{" "}
                          NextJS or handlabrs Server Side Rednereding
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(freeDemoStyle)(SectionFreeDemo);
