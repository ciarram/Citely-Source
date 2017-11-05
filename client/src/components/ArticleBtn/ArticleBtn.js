//C.M. - this button will allow the user to access the form to add a new article they want to cite

import React from "react";

const ArticleBtn = () => (
    <button type="button" class="btn" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
    Add a new Article
    </button>
);
// const ArticleButton = ({ type, className, children, onClick }) => (
//     // <button
//     //   onClick={onClick}
//     //   className={`btn btn-${type ? type : "default"}${className
//     //     ? " " + className
//     //     : ""}`}
//     // >
//     //   {children}
//     // </button>
//   );

export default ArticleBtn;