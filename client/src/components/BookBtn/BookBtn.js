//C.M - When clicked this button will allow the user to access the form modal to add a new book citation to their list

import React from "react";
import Button from 'muicss/lib/react/button';
import "./BookBtn.css";

export const BookBtn = (props) => (
    <Button {...props} variant="raised" className="bookbtn">
    Add Book
    </Button>
    
    // <button {...props} className="btn waves-effect waves-light">
    // Add Book
    // </button>
)

// export default BookBtn;