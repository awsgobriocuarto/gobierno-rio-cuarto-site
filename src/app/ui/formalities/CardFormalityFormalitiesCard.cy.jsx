import React from "react";
import FormalitiesCard from "./CardFormality";

describe("<FormalitiesCard />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FormalitiesCard />);
  });
});
