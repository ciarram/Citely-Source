import React from "react";
import Textarea from 'muicss/lib/react/textarea';

export const BookTextArea = props => (
    <div>
    <Textarea className="form-control" {...props} floatingLabel={true} />
    </div>
    // <div className="form-group">
        // <textarea className="form-control" {...props} />
    // </div>
);
