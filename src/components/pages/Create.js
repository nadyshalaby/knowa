import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
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
              <div className="form-group">
                <label>Article Content</label>
                <textarea className="form-control" rows="5" />
              </div>
            </div>

            <div className="col-md-12 mb-3">
              <div className="input-group">
                <select
                  className="custom-select"
                  aria-label="Example select with button addon">
                  <option selected disabled>
                    Choose Category...
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button" >
                    <FontAwesomeIcon icon={faPlus} />
                    &nbsp;
                    Add Category
                  </button>
                </div>
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
