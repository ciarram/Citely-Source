//C.M - When clicked this button will allow the user to access the form modal to add a new book citation to their list

import React from "react";

const BookBtn = () => (
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
    Add a New Book
    </button>
)

export default BookBtn;