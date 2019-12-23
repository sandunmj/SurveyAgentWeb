import React, { Component } from "react";
import fire from "../firebase/firebase-config";

export const UserGroupContext = React.createContext();
export const UserGroupRef = fire.database().ref("userGroups");
export const UserListRef = fire.database().ref("userList");
export const DivisionsRef = fire.database().ref("divisions");
export const UsersRef = fire.database().ref("userEmails");

export class UserGroupProvider extends Component {
  constructor(props) {
    super(props);
    this.usersRef = fire.database().ref("userEmails");
    this.state = {
      groups: [],
      searchEmails: [],
      selectedGroup: newGroup,
      users: [],
      userList: [],
      divisions: []
    };
    this.fetchUserGroups = this.fetchUserGroups.bind(this);
    this.fetchUserList = this.fetchUserList.bind(this);
    this.fetchDivisions = this.fetchDivisions.bind(this);

    this.fetchUserGroups();
    this.fetchUserList();
    this.fetchDivisions();
    // this.saveDivisions(divisions);
    // this.saveUserList(userList);
    // this.saveUserEmails(userEmails);
    // this.saveUserGroup(dummyGroup);
  }

  fetchUserGroups() {
    UserGroupRef.once("value").then(snapshot => {
      this.setState({
        groups: snapshot.val()
      });
    });
  }

  fetchUserList() {
    UserListRef.once("value").then(snapshot => {
      let emails = [];
      if (snapshot.val()) {
        snapshot.val().forEach(usr => {
          emails.push({ email: usr.email });
        });
        this.setState({
          userList: snapshot.val(),
          users: emails
        });
      } else {
        this.setState({
          userList: [],
          users: []
        });
      }
    });
  }

  fetchDivisions() {
    DivisionsRef.once("value").then(snapshot => {
      this.setState({
        divisions: snapshot.val()
      });
    });
  }
  saveUserGroup(group) {
    UserGroupRef.set(group);
  }

  saveUserList(userList) {
    UserListRef.set(userList);
  }

  saveUserEmails(userEmails) {
    UsersRef.set(userEmails);
  }

  saveDivisions() {
    DivisionsRef.set(divisions);
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
              }),
            setDivisions: divisions => {
              this.setState({
                divisions: divisions
              });
            }
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

const userList = [
  { id: 1, empId: "", designation: "", phone: "", email: "", division: "" }
];

const divisions = [
  { id: 1, division: "HR" },
  { id: 2, division: "Marketing" },
  { id: 3, division: "Management" },
  { id: 4, division: "Finance" },
  { id: 5, division: "Engineering" },
  { id: 6, division: "Sales" },
  { id: 7, division: "IT" },

];
