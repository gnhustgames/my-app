import React, { Component } from "react";
// import { FormattedMessage } from "react-intl";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
//xu li mang va object bang cu phap ngan gon hon = lodash(giong jquery)
import _ from "lodash";
class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      name:"",
      gender:"",
      status:"",
    };
  }

  componentDidMount() {
    let user = this.props.currentUser;
    if (user && !_.isEmpty(user)) {
      this.setState({
        id: user.id,
        email: user.email,
        name:user.name,
        gender: user.gender,
        status: user.status,
      });
    }
  }

  handleOnchangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
   
  };
  //validate email input 

  checkValidateInput = () => {
    let isValid = true;
    let arrInput = ["email", "name", "gender", "status"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert(`Missing parameter :` + arrInput[i]);
        break;
      }
    
    }
    return isValid;
  };
  handleSaveUser = () => {
    let isValid = this.checkValidateInput();
    
    if (isValid === true) {
      //call api update user model
      // userUpdateId
      this.props.editUser(this.state);
    }
  };

  toggle = () => {
    this.props.toggleUserEditModal();
  };

  render() {
  
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        className={"modal-user-container"}
        size="lg"
      >
        <ModalHeader toggle={() => this.toggle()}>Edit a user </ModalHeader>{" "}
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container form-group">
              <label htmlFor=""> Email </label>{" "}
              <input
                type="text"
                onChange={(event) => this.handleOnchangeInput(event, "email")}
                value={this.state.email}
                disabled
              />{" "}
            </div>{" "}
            <div className="input-container form-group">
              <label htmlFor="">  Name </label>{" "}
              <input
                type="text"
                onChange={(event) =>
                  this.handleOnchangeInput(event, "name")
                }
                value={this.state.name}
              />{" "}
            </div>{" "}
            
            <div className="input-container form-group">
              <label htmlFor="">Gender</label>

              <select
                name=""
                className="select-gender"
                id="gender"
                onChange={(event) => this.handleOnchangeInput(event, "gender")}
                value={this.state.gender}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="input-container form-group">
              <label htmlFor="">Status</label>
              <select
                name=""
                className="select-gender"
                id="status"
                onChange={(event) => this.handleOnchangeInput(event, "status")}
                value={this.state.status}
              >
                <option value="active">Active</option>
                <option value="inactive">InActive</option>
              </select>
            </div>
          </div>{" "}
        </ModalBody>{" "}
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => this.handleSaveUser()}
          >
            Save changes{" "}
          </Button>{" "}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);