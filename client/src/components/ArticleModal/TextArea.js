import React from "react";

const TextBox = props => (
    <div className="form-group">
        <textarea className="form-control" {...props} />
    </div>
);

export default TextBox;