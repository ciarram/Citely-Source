import React from "react"; 
import Textarea from 'muicss/lib/react/textarea';
export const ProjectTextArea = props => (
    <div>
        <Textarea className="form-control" {...props} floatingLabel={true} />
    </div>
    
    // <div className="form-group">
        // <textarea className="form-control" {...props} placeholder="Enter your thesis, quote or anything else for your essay here" />
    // </div>
);
