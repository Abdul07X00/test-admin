import React, {useState} from "react";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles,
  Select,
  MenuItem,
} from "@material-ui/core";
import DeleteButton from "../elements/deleteBtn";
import * as actionCreators from "../../store/actions";
import DetailsDialog from '../elements/detailsDialog';


const selectStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "red",
    width: "200px",
  }),
  // menu: (provided, state) => ({
  //   ...provided,
  //   top:'auto'
  // }),
};

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2),
  },
}));

const DataTable = ({ className, tickets, ...rest }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [popupData, setPopupData] = useState([]);

  const changeTicketStatusHandler = (value, id) => {
    console.log("status :", value)
    dispatch(actionCreators.changeTicketStatus(id, value))
      .then(() => {})
      .catch((err) => {});
  };

  const handleDeleteTicket = (id) => {
    if (window.confirm("Are you sure you wish to delete this item?")) {
      dispatch(actionCreators.deleteTicket(id))
        .then(() => {})
        .catch((err) => {});
    }
  };

  const handleOpenPopup = (data) => {
    setPopupData(data)
    setOpen(true)
  }

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sl No</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tickets?.length
                ? tickets.map((ticket, index) => (
                    <TableRow hover key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{ticket.title.substring(0,20)}</TableCell>
                      <TableCell>{ticket.description.substring(0,20)}<h6 onClick={() => {handleOpenPopup(ticket)}} style={{color:"blue", cursor:"pointer"}}>{"more"}</h6></TableCell>
                      <TableCell>{ticket.name}</TableCell>
                      <TableCell>{ticket.email}</TableCell>
                      <TableCell>{ticket.phone}</TableCell>
                      <TableCell>
                        {moment(ticket.created_at).format("DD/MM/YYYY")}{" "}
                      </TableCell>
                      <TableCell>
                        <Select
                          labelId="label"
                          id="select"
                          value={ticket.status}
                          onChange={(e) =>
                            changeTicketStatusHandler(e.target.value, ticket.id)
                          }
                        >
                          <MenuItem value="1">New</MenuItem>
                          <MenuItem value="2">Accepted</MenuItem>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <DeleteButton
                          size="small"
                          onClick={() => handleDeleteTicket(ticket.id)}
                        />
                      </TableCell>
                    </TableRow>
                  ))
                : <h3>No record found</h3>}
            </TableBody>
          </Table>
        </Box>
        {open && (
        <DetailsDialog
          open={open}
          onClose={() => setOpen(false)}
          popupData={popupData}
        ></DetailsDialog>       
      )}
      </PerfectScrollbar>
    </Card>
  );
};

export default DataTable;
