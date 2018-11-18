import React, { Component } from "react";

export default class Create extends Component {
  render() {
    return (
      <div className="Create container-fluid py-2">
        <form action="#" method="post" spellCheck={false}>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label>Article Name</label>
              <input type="text" className="form-control is-valid" required />
              <div className="valid-feedback">Sample Success Message</div>
            </div>

            <div className="col-md-4 mb-3">
              <label>Author Name</label>
              <input type="text" className="form-control is-valid" required />
              <div className="valid-feedback">Sample Success Message</div>
            </div>

            <div className="col-md-4 mb-3">
              <label>Keywords</label>
              <input type="text" className="form-control is-invalid" required />
              <div className="invalid-feedback">Sample Error Message</div>
            </div>

            <div className="col-md-12 mb-3">
              <div class="form-group">
                <label>Article Content</label>
                <textarea class="form-control" rows="5" />
              </div>
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Publish
          </button>
        </form>
      </div>
    );
  }
}
