import React, { useState, useContext } from "react";
import clsx from "clsx";
import { Autocomplete } from "@material-ui/lab";
import PerfectScrollbar from "react-perfect-scrollbar";
import { makeStyles } from "@material-ui/styles";
import { UserListRef } from "../../Providers/UserGroup";
import { UserGroupContext } from "../../Providers/UserGroup";
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
  Button,
  Typography,
  Grid,
  Divider
} from "@material-ui/core";

let lastId = 1;

const UsersTable = props => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const state = useContext(UserGroupContext);

  const { className, users, ...rest } = props;
  const [empList, setEmpList] = useState([
    {
      id: lastId,
      empId: "",
      designation: "",
      division: "",
      phone: "",
      email: ""
    }
  ]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleNewEmployee = () => {
    lastId += 1;
    setEmpList(currentEmpList => [
      ...empList,
      {
        id: lastId,
        empId: "",
        designation: "",
        division: "",
        phone: "",
        email: ""
      }
    ]);
  };

  const handleFormChange = event => {
    const filedId = event.target.id;
    const value = event.target.value;
    const param = filedId.slice(0, 2);
    const empId = filedId.slice(3);
    let empList_ = empList.slice(0);
    let employee = empList_.filter(emp => emp.id.toString() == empId)[0];
    let index = empList_.indexOf(employee);

    const paramMap = ["id", "de", "di", "em", "ph"];
    const paramMapNew = ["empId", "designation", "division", "email", "phone"];
    const newParam = paramMapNew[paramMap.indexOf(param)];

    if (newParam) {
      employee[newParam] = value;
      empList_.splice(index, 1, employee);
    }
    setEmpList(empList_);
  };

  const handleSubmit = () => {
    // UserListRef.set([]);
    let users = state.state.userList;
    users = users.concat(empList);
    UserListRef.set(users);
  };

  const clikedDelete = event => {
    let empList_ = empList.slice(0);
    selectedUsers.forEach(user => {
      const index = empList_.indexOf(
        empList_.filter(emp => emp.id === user)[0]
      );
      empList_.splice(index, 1);
    });
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
    setSelectedUsers(newSelectedUsers);
  };

  const handleDivisionChange = (e, val) => {

    const filedId = e.target.id.slice(0, 4);
    let value = "";
    if (val) {
      value = val.division;
    }
    const empId = filedId.slice(3);
    let empList_ = empList.slice(0);
    let employee = empList_.filter(emp => emp.id.toString() == empId)[0];
    let index = empList_.indexOf(employee);

    employee["division"] = value;
    empList_.splice(index, 1, employee);

    setEmpList(empList_);
  };

  return (
    <div>
      <Divider />
      <Grid
        style={{ marginTop: "2%", marginBottom: "2%" }}
        container
        justify="center"
        spacing={4}
      >
        <Grid item xs={12}>
          <Typography variant="h3"> Add New Users </Typography>
          <Typography variant="subtitle2">
            You can simply add a user to the system. Later on add them to a
            group.
          </Typography>
        </Grid>
      </Grid>

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
                      <TableCell padding="checkbox">
                        <Button
                          color="secondary"
                          variant="outlined"
                          size="small"
                          onClick={() => clikedDelete()}
                        >
                          Delete
                        </Button>
                      </TableCell>
                      <TableCell>Emplyee Id</TableCell>
                      <TableCell>Designation</TableCell>
                      <TableCell>Division</TableCell>
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
                        {/* <TableCell>
                          <TextField
                            fullWidth
                            id={"di_" + user.id}
                            label="Division"
                            margin="dense"
                            name="division"
                            required
                            variant="outlined"
                          />
                        </TableCell> */}
                        <TableCell>
                          <Autocomplete
                            id={"di_" + user.id}
                            options={state.state.divisions}
                            onChange={handleDivisionChange}
                            disableClearable
                            getOptionLabel={option => option.division}
                            style={{ width: 160 }}
                            renderInput={params => (
                              <TextField
                                {...params}
                                id={"di_" + user.id}
                                label="Division"
                                margin="dense"
                                name="division"
                                variant="outlined"
                                required
                                fullWidth
                              />
                            )}
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
                </Table>
                <div className={classes.nameContainer}>
                  <Button
                    color="primary"
                    variant="outlined"
                    onClick={() => handleNewEmployee()}
                  >
                    New
                  </Button>
                </div>
              </div>
            </PerfectScrollbar>
          </CardContent>
          <CardContent>
            <div>
              <Grid
                container
                spacing={3}
                justify="space-around"
                style={{ marginLeft: "3%" }}
              >
                <Grid item xs={3}>
                  <Button
                    type="submit"
                    color="primary"
                    variant="outlined"
                    size="large"
                  >
                    Add All
                  </Button>
                </Grid>
              </Grid>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
};

export default UsersTable;

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
    justifyContent: "flex-end",
    marginRight: 20,
    marginTop: 5
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: "flex-end"
  }
}));
