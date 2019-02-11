import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
// @material-ui icons
import Grid from "@material-ui/icons/GridOn";
import PhoneLink from "@material-ui/icons/Phonelink";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoney from "@material-ui/icons/AttachMoney";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// images
import Vodafone from "assets/amazon.png";
import Microsoft from "assets/google.gif";
import Harvard from "assets/pluralsight.png";
import Standford from "assets/sofi.jpg";
import profilePic1 from "assets/img/assets-for-demo/test1.jpg";
import profilePic2 from "assets/img/assets-for-demo/test2.jpg";
import profilePic3 from "assets/img/assets-for-demo/test3.jpg";

import overviewStyle from "assets/jss/material-kit-pro-react/views/presentationSections/overviewStyle.jsx";

class SectionOverview extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div
          className={classes.features5}
          style={{
            backgroundImage: `url(${require("assets/img/assets-for-demo/features-5.jpg")})`
          }}
        >
          <GridItem
            md={8}
            className={classNames(classes.mlAuto, classes.mrAuto)}
          >
            <h2 className={classes.title}>How did I get into Coding?</h2>
          </GridItem>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem sm={3} className={classes.featuresShow}>
                <InfoArea
                  title="Tech entrprnarial and Innovative"
                  description={<p>Innovation jksadhflkaslkdjfl;af.</p>}
                  icon={Grid}
                  iconColor="gray"
                  vertical={true}
                />
              </GridItem>
              <GridItem sm={3} className={classes.featuresShow}>
                <InfoArea
                  title="Love for Technology"
                  description={
                    <p>
                      This Material UI kit is built mobile-first and looks
                      amazing on any device. Regardless of the screen size, the
                      website content will naturally fit the given resolution.
                    </p>
                  }
                  icon={PhoneLink}
                  iconColor="gray"
                  vertical={true}
                />
              </GridItem>
              <GridItem sm={3} className={classes.featuresShow}>
                <InfoArea
                  title="Smart and Analtyical"
                  description={
                    <p>
                      Using the Material Kit PRO will save you large amount of
                      time. You don't have to worry about customising the basic
                      Bootstrap design or generating new components.
                    </p>
                  }
                  icon={AccessTime}
                  iconColor="gray"
                  vertical={true}
                />
              </GridItem>
              <GridItem sm={3} className={classes.featuresShow}>
                <InfoArea
                  title="Passion for Great User Experiences"
                  description={
                    <p>
                      Creating your design from scratch with dedicated designers
                      can be very expensive. Using a kit is the best option to
                      start your development while bootstrapping your budget.
                    </p>
                  }
                  icon={AttachMoney}
                  iconColor="gray"
                  vertical={true}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <div className={classes.sectionTestimonials}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem
                md={8}
                className={classNames(classes.mlAuto, classes.mrAuto)}
              >
                <h2 className={classes.title}>
                  Trusted Work Ethic and Leadership
                </h2>
                <h5 className={classes.description}>
                  The UI Kits, Templates and Dashboards that we've created are
                  used by
                  <b> 330,000+ web developers</b> in over{" "}
                  <b> 576.000 Web Projects</b>. This is what some of them think:
                </h5>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem md={4} sm={4}>
                <Card plain profile>
                  <GridContainer>
                    <GridItem md={3} sm={3}>
                      <CardHeader image plain>
                        <a href="#pablo">
                          <img src={profilePic1} alt="..." />
                        </a>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: "url(" + profilePic1 + ")",
                            opacity: "1"
                          }}
                        />
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: "url(" + profilePic1 + ")",
                            opacity: "1"
                          }}
                        />
                      </CardHeader>
                    </GridItem>
                    <GridItem md={9} sm={9}>
                      <CardBody plain className={classes.alignLeft}>
                        <h4 className={classes.cardTitle}>
                          Jeffrey Van Hoose - Supervisor
                        </h4>
                        <p className={classes.cardDescription}>
                          "Paul Murff is an excellent employee and even better
                          person. He is always on time and ready to work with a
                          great attitude. In his time here at Teleperformance,
                          he has consistently been a top performer in several of
                          our key metrics, including Quality Assurance, handle
                          Time, and Member Satisfaction. Paul is driven to meet
                          any goals set for him by others or himself.We have a
                          Quarterly Award here for the top 2% of performers in
                          every department, The Blue Diamond Club. Upon learning
                          of it, Paul set a goal for himself to become a member
                          and through hard work and attention to detail was able
                          to achieve this lofty award twice in a row. Paul is
                          also always willing to help others grow and excel at
                          their jobs as well. He has been an integral member of
                          my team in helping me develop other representatives
                          who were outliers on our floor. It is my opinion that
                          Paul has the ability to learn and excel in any
                          endeavor he puts his mind to, and anyone should count
                          themselves fortunate to have him in their employ. "
                        </p>
                      </CardBody>
                    </GridItem>
                  </GridContainer>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card plain profile>
                  <GridContainer>
                    <GridItem md={3} sm={3}>
                      <CardHeader image plain>
                        <a href="#pablo">
                          <img src={profilePic2} alt="..." />
                        </a>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: "url(" + profilePic2 + ")",
                            opacity: "1"
                          }}
                        />
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: "url(" + profilePic2 + ")",
                            opacity: "1"
                          }}
                        />
                      </CardHeader>
                    </GridItem>
                    <GridItem md={9} sm={9}>
                      <CardBody plain className={classes.alignLeft}>
                        <h4 className={classes.cardTitle}>Carlos Pozo</h4>
                        <p className={classes.cardDescription}>
                          "I have never worked with a most dedicated man such as
                          Paul. He is a great leader, he knows how to delegate,
                          inspire and motivate. He is a easy person to get along
                          with. Paul is a trustworthy person and very
                          responsible."
                        </p>
                      </CardBody>
                    </GridItem>
                  </GridContainer>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card plain profile>
                  <GridContainer>
                    <GridItem md={3} sm={3}>
                      <CardHeader image plain>
                        <a href="#pablo">
                          <img src={profilePic3} alt="..." />
                        </a>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: "url(" + profilePic3 + ")",
                            opacity: "1"
                          }}
                        />
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: "url(" + profilePic3 + ")",
                            opacity: "1"
                          }}
                        />
                      </CardHeader>
                    </GridItem>
                    <GridItem md={9} sm={9}>
                      <CardBody plain className={classes.alignLeft}>
                        <h4 className={classes.cardTitle}>Brock</h4>
                        <p className={classes.cardDescription}>
                          "Paul is without a doubt one of the hardest working
                          dudes I have come across. If he ever ran into an issue
                          he couldn't resolve he wouldn't go home until he
                          figured it out. I mean I am talking hours and hours of
                          dedication above and beyond what was expected of him.
                          He also doesn't give up for anything and always
                          accepts a challenge and wants to make himself better.
                          On top of being tenacious and dedicated he is very
                          positive and loves seeing success in other people. Be
                          around this guy for just a few moments and he will
                          make you feel like you are on top of the world with
                          whatever it is you are doing. You only get 100% out of
                          this guy."
                        </p>
                      </CardBody>
                    </GridItem>
                  </GridContainer>
                </Card>
              </GridItem>
            </GridContainer>
            <div className={classes.ourClients}>
              <GridContainer justify="center">
                <GridItem md={3} sm={3}>
                  <img src={Vodafone} alt="vodafone" />
                </GridItem>
                <GridItem md={3} sm={3}>
                  <img src={Microsoft} alt="microsoft" />
                </GridItem>
                <GridItem md={3} sm={3}>
                  <img src={Harvard} alt="harvard" />
                </GridItem>
                <GridItem md={3} sm={3}>
                  <img src={Standford} alt="stanford" />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(overviewStyle)(SectionOverview);
