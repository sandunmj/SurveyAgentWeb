import React, { Component } from "react";
import fire from "../firebase/firebase-config";
import UserGroup from "../views/user-group/UserGroup";

export const UserGroupContext = React.createContext();

export class UserGroupProvider extends Component {
  constructor(props) {
    super(props);
    this.userGroupRef = fire.database().ref("userGroups");
    this.usersRef = fire.database().ref("userEmails");
    this.state = { groups: userGroups };
    this.fetchUserGroups = this.fetchUserGroups.bind(this);
    this.fetchUsers = this.fetchUsers.bind(this);
    this.fetchUserGroups();
    // this.fetchUsersEmails();
    // this.saveUserGroup(userGroups);
  }

  fetchUserGroups() {
    this.userGroupRef.once("value").then(snapshot => {
      this.setState({ groups: snapshot.val() });
      console.log(snapshot.val());
    });
  }

  fetchUsers() {
    this.usersRef.once("value").then(snapshot => {
      this.setState({ users: snapshot.val() });
      console.log(snapshot.val());
    });
  }

  saveUserGroup(group) {
    this.userGroupRef.set([
      {
        id: 1,
        emailList: group,
        title: "Engineers",
        description: "All the Engineers"
      }
    ]);
  }

  render() {
    return (
      <UserGroupContext.Provider value={[this.state, this.setState]}>
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
