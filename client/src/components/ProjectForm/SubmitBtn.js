import React from "react";
import Button from 'muicss/lib/react/button';
import "./ProjectForm.css";

export const SubmitBtn = (props) => (
    <Button {...props} variant="raised" className = "submitbtn">
    Add Project
    </Button>
)

