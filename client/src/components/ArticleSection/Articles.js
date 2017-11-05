import React from "react";

const ArticlesSection = props => (
    <div class="card" style="width: 20rem;">
    <div class="card-header">
      {this.props.title}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Test 1</li>
      <li class="list-group-item">Test 2</li>
      <li class="list-group-item"> Test 3</li>
    </ul>
  </div>
);

export default ArticlesSection;