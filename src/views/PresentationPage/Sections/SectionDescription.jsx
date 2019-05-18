import React from "react";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

// @material-ui icons
import Apps from "@material-ui/icons/Apps";
import ViewDay from "@material-ui/icons/ViewDay";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/presentationSections/descriptionStyle.jsx";

class SectionDescription extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div className={classes.features}>
            <GridContainer>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Front End Development"
                  description="Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can take variations in colour."
                  icon={Apps}
                  iconColor="danger"
                  vertical={true}
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="API Development"
                  description="Putting together a page has never been easier than matching together sections. From team presentation to pricing options, you can easily customise and built your pages."
                  icon={ViewDay}
                  iconColor="primary"
                  vertical={true}
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Project Architect and Lead"
                  description="Dockerized Containers Hosted with Azure Cloud Infrastructure ."
                  icon={ViewCarousel}
                  iconColor="success"
                  vertical={true}
                />
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              Senior Software Engineer w/ Professional Experience in these areas
              {/* <GridItem md={8} sm={8}>
              <h4 className={classes.description}>
                Technology with code is my passion, I{" "}
                <span role="img" aria-label="heart">
                  ❤️
                </span>{" "}
                to solve data workflow/data engineering challenges w/ excellent
                UI.
              </h4>
            </GridItem> */}
            </GridContainer>
            <GridContainer>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Dashboards"
                  description="Charts, Graphs, Account Settings/Profiles"
                  icon={Apps}
                  iconColor="danger"
                  vertical={true}
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Complex yet easy to Use Sign Ups"
                  description="Putting together a page has never been easier than matching together sections. From team presentation to pricing options, you can easily customise and built your pages."
                  icon={ViewDay}
                  iconColor="primary"
                  vertical={true}
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Data Analysis"
                  description="complex sql or mongo data sets used for tools and charts "
                  icon={ViewCarousel}
                  iconColor="success"
                  vertical={true}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(descriptionStyle)(SectionDescription);
