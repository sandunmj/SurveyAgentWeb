import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardContent,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: "flex-end"
  }
}));

let lastId = 1;

const UsersTable = props => {
  const classes = useStyles();
  const [page, setPage] = useState(0);

  const { className, users, ...rest } = props;
  const [empList, setEmpList] = useState([
    { id: lastId, empId: "", designation: "", phone: "", email: "" }
  ]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleNewEmployee = () => {
    lastId += 1;
    setEmpList(currentEmpList => [
      ...empList,
      { id: lastId, empId: "", designation: "", phone: "", email: "" }
    ]);
  };

  const handleFormChange = event => {
    const filedId = event.target.id;
    const value = event.target.value;

    const param = filedId.slice(0, 2);
    const empId = filedId.slice(3);
    let empList_ = empList.slice(0);
    let employee = empList_.filter(emp => emp.id.toString() == empId)[0];
    let index =  empList_.indexOf(employee);
  

    const paramMap = ['id','de','em','ph'];
    const paramMapNew = ['empId','designation','email','phone'];
    const newParam = paramMapNew[paramMap.indexOf(param)];

    if (newParam) {        
        employee[newParam] = value;
        empList_.splice(index, 1, employee );
    }
    setEmpList(empList_);
  };

  const handleSubmit = () => {
      console.log(empList);
      alert("OK ?");
  };

  const clikedDelete = event => {   
    let empList_ = empList.slice(0)
    selectedUsers.forEach(
        user => {
            const index = empList_.indexOf(empList_.filter(emp => emp.id === user)[0]);
            empList_.splice(index,1)
        }
    );
    setSelectedUsers([]);
    setEmpList(empList_);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedUsers.indexOf(id);
    let newSelectedUsers = [];

    if (selectedIndex === -1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers, id);
    } else if (selectedIndex === 0) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1));
    } else if (selectedIndex === selectedUsers.length - 1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedUsers = newSelectedUsers.concat(
        selectedUsers.slice(0, selectedIndex),
        selectedUsers.slice(selectedIndex + 1)
      );
    }
console.log(newSelectedUsers)
    setSelectedUsers(newSelectedUsers);
  };
  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form
        onSubmit={() => handleSubmit()}
        onChange={event => handleFormChange(event)}
      >
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox" >
                      <Button color="secondary" variant="outlined" size="small" onClick = {() => clikedDelete()}>
                        Delete
                      </Button>
                    </TableCell>
                    <TableCell>Emplyee Id</TableCell>
                    <TableCell>Designation</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {empList.map(user => (
                    <TableRow
                      className={classes.tableRow}
                      hover
                      key={user.id}
                      selected={selectedUsers.indexOf(user.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedUsers.indexOf(user.id) !== -1}
                          color="primary"
                          onChange={event => handleSelectOne(event, user.id)}
                          value="true"
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          fullWidth
                          id={"id_" + user.id}
                          label="Employee Id"
                          margin="dense"
                          name="employeeId"
                          variant="outlined"
                        />
                      </TableCell>

                      <TableCell>
                        <TextField
                          fullWidth
                          id={"de_" + user.id}
                          label="Designation"
                          margin="dense"
                          name="designation"
                          required
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          fullWidth
                          id={"em_" + user.id}
                          label="Email"
                          margin="dense"
                          name="email"
                          required
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          fullWidth
                          id={"ph_" + user.id}
                          label="Phone Number"
                          margin="dense"
                          name="phone"
                          required
                          variant="outlined"
                        />{" "}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <Button
                  color="primary"
                  variant="outlined"
                  onClick={() => handleNewEmployee()}
                >
                  New
                </Button>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <CardContent>
          <div className={classes.nameContainer}>
            <Button
              type="submit"
              color="primary"
              variant="outlined"
              size="large"
            >
              Create
            </Button>
          </div>
        </CardContent>
      </form>
    </Card>
  );
};

UsersTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default UsersTable;

//   const handleSelectAll = event => {
//     const { users } = props;

//     let selectedUsers;

//     if (event.target.checked) {
//       selectedUsers = users.map(user => user.id);
//     } else {
//       selectedUsers = [];
//     }

//     setSelectedUsers(selectedUsers);
//   };

//   const handleSelectOne = (event, id) => {
//     const selectedIndex = selectedUsers.indexOf(id);
//     let newSelectedUsers = [];

//     if (selectedIndex === -1) {
//       newSelectedUsers = newSelectedUsers.concat(selectedUsers, id);
//     } else if (selectedIndex === 0) {
//       newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1));
//     } else if (selectedIndex === selectedUsers.length - 1) {
//       newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelectedUsers = newSelectedUsers.concat(
//         selectedUsers.slice(0, selectedIndex),
//         selectedUsers.slice(selectedIndex + 1)
//       );
//     }

//     setSelectedUsers(newSelectedUsers);
//   };
