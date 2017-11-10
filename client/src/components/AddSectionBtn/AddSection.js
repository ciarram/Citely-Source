import React from "react";
import Button from 'muicss/lib/react/button';
import "./AddSection.css";

export const AddSectionBtn = (props) => (
    <Button {...props} variant="raised" className="sectionbtn">
        Add New Section
    </Button>
   
    // <button {...props} className="btn">
    // Add a New Section
    // </button>
)