import React from "react";
import Button from 'muicss/lib/react/button';

export const DeleteBtn = (props) => (
    <Button {...props} variant="raised" color="danger" size="small">
    Delete
    </Button>
    
    // <button {...props} className="btn">
    // Delete
    // </button>
)