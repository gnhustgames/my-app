import React, { Component } from "react";
// import { FormattedMessage } from "react-intl";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";

class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name:"",
      gender:"male",
      status:"inactive",
    };
  }

  componentDidMount() {}
  handleOnchangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState(
      {
        ...copyState,
      }
      // () => console.log(this.state)
    );
  };
validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
      
  checkValidateInput = () => {
   
    let isValid = true;
    let arrInput = [
      "email",
      "name",
      "gender",
      "status",
    ];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert(`Missing parameter :` + arrInput[i]);
        break;
      }
    }
    if(this.validateEmail(this.state.email)===false){
      isValid = false;
      alert(`Data type must be email`);
    }
    
    return isValid;
  };
 
  handleAddNewUser = () => {
    let isValid = this.checkValidateInput();
    console.log(isValid)
    if (isValid === true ) {
      //call api create model
      this.props.createNewUser(this.state);
    //console.log(this.state);
      this.setState({
        email: "",
        name: "",
        firstName: "",
        lastName: "",
      });
    }
  };

  toggle = () => {
    this.props.toggleFromParent();
  };

  render() {
    // console.log(this.props);
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        className={"modal-user-container"}
        size="lg"
      >
        <ModalHeader toggle={() => this.toggle()}>
          Create a new user{" "}
        </ModalHeader>{" "}
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container form-group">
              <label htmlFor="">Email</label>
              <input
                type="email"
                onChange={(event) => this.handleOnchangeInput(event, "email")}
                value={this.state.email}
              
              />
            </div>
            <div className="input-container form-group">
              <label htmlFor="">Name</label>
              <input
                type="name"
                onChange={(event) =>
                  this.handleOnchangeInput(event, "name")
                }
                value={this.state.name}
              />
            </div>
            <div className="input-container form-group">
            <select
                name=""
                className="select-gender"
                id="gender"
                onChange={(event) => this.handleOnchangeInput(event, "gender")}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="input-container form-group">
              <select
                name=""
                className="select-gender"
                id="status"
                onChange={(event) => this.handleOnchangeInput(event, "status")}
              >
                
                <option value="inactive">Inactive</option>
                <option value="active">Active</option>
              </select>
            </div>

            
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => this.handleAddNewUser()}
          >
            Add new
          </Button>
          <Button
            color="secondary"
            className="px-3 "
            onClick={() => this.toggle()}
          >
            Close{" "}
          </Button>{" "}
        </ModalFooter>{" "}
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);