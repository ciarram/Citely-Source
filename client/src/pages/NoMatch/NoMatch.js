import React from "react";
import { Column, Row1, Container1 } from "../../components/Grid";

const NoMatch = () =>
  <Container1 fluid>
    <Row1>
      <Column size="md-12">
          <h1>404 Page Not Found</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
      </Column>
    </Row1>
  </Container1>;

export default NoMatch;