import React from "react";
import {Input} from "./Input.js";
import {TextBox} from "./TextArea.js";

const ArticleModal = () =>(
<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Enter Article Citation and Quote</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Textbox />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn">Save changes</button>
        <button type="button" class="btn" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
);

export default ArticleModal;