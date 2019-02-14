import React, {Component} from 'react';

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTrue: false,
    }
  }

  componentDidMount() {
    let inputs = document.querySelectorAll("input")
    let _this = this
    for(let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", function(e) {
        _this.setState({
          inputTrue: true
        })
      })
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="mb-4 border border-info rounded p-2 p-sm-4">
            <h5>Your data:</h5>
            <div className="form-group">
              <div className="label">
                <label htmlFor='name1' className="d-block mb-0">Label</label>
                <input type="text" name="label" id="name1" className="d-block form-control" />
              </div>
              <div className="value">
                <label htmlFor='name1' className="d-block mb-0">Value</label>
                <input type="text" name="value" id="name1" className="d-block form-control" />
              </div>
            </div>
          </div>
        </div>
        <div className={"generate-links " + (this.state.inputTrue ? 'd-block' : 'd-none')}>
          <div className="form-group d-block">
            <a href="#" id="genJSON" className="btn btn-primary" download="affinity-deals.json">Generate JSON</a>
            <a href="#" id="genCSV" className="btn btn-info" download="affinity-deals.csv">Generate CSV</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Data;
