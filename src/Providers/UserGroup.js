import React, { Component } from "react";
import fire from "../firebase/firebase-config";

export const UserGroupContext = React.createContext();
export const UserGroupRef = fire.database().ref("userGroups");
export const UserListRef = fire.database().ref("userList");

export class UserGroupProvider extends Component {
  constructor(props) {
    super(props);
    this.userGroupRef = fire.database().ref("userGroups");
    this.usersRef = fire.database().ref("userEmails");
    this.state = {
      groups: userGroups,
      searchEmails: [],
      selectedGroup: newGroup,
      users: [],
      userList: []
    };
    this.fetchUserGroups = this.fetchUserGroups.bind(this);
    this.fetchUserList = this.fetchUserList.bind(this);
    this.saveUserEmails = this.saveUserEmails.bind(this);
    this.saveUserGroup = this.saveUserGroup.bind(this);
    this.saveUserList = this.saveUserList.bind(this);

    this.fetchUserGroups();
    this.fetchUserList();
    // this.saveUserList(userList);
    // this.saveUserEmails(userEmails);
    // this.saveUserGroup(dummyGroup);
  }

  fetchUserGroups() {
    this.userGroupRef.once("value").then(snapshot => {
      this.setState({
        groups: snapshot.val()
      });
    });
  }

  fetchUserList() {
    UserListRef.once("value").then(snapshot => {
      let emails = [];
      snapshot.val().forEach(usr => {
        emails.push({ email: usr.email });
      });
      this.setState({
        userList: snapshot.val(),
        users: emails
      });
    });
  }

  saveUserGroup(group) {
    UserGroupRef.set(group);
    console.log("eeeeeeeeeeeee");
  }

  saveUserList(userList) {
    UserListRef.set(userList);
  }

  saveUserEmails(userEmails) {
    this.usersRef.set(userEmails);
  }

  render() {
    return (
      <UserGroupContext.Provider
        value={{
          state: this.state,
          actions: {
            setGroups: userGroup =>
              this.setState({
                groups: userGroup
              }),
            setSearchEmails: emails =>
              this.setState({
                searchEmails: emails
              }),
            setSelectedGroup: group =>
              this.setState({
                selectedGroup: group
              })
          }
        }}
      >
        {this.props.children}
      </UserGroupContext.Provider>
    );
  }
}

const users = [
  {
    id: 39423,
    title: "HR",
    description: "Mangers, HR emplyees  ",
    imageUrl: "/assets/company/users.jpg"
  }
];

const userGroups = [];

const dummyGroup = [
  {
    id: 1,
    emailList: ["bumuthu@gmail.com", "dimuthu@gmail.com"],
    title: "Engineers",
    description: "All the Engineers"
  }
];
const newGroup = {
  id: 0,
  emailList: [],
  title: "Create A New Group",
  description: "Create a brandnew group with existing users"
};

const userEmails = [
  { email: "bumuthu@gmail.com" },
  { email: "dimuthu@gmail.com" },
  { email: "helloworld1@gmail.com" },
  { email: "dimuthu@gmail.com" },
  { email: "helloworld2@gmail.com" },
  { email: "sandun@gmail.com" },
  { email: "helloworld3@gmail.com" }
];

const userList = [{ id: 1, empId: "", designation: "", phone: "", email: "" }];
