import React, { useEffect , useState} from "react";
import {
  Container
} from '@material-ui/core';
import * as actionCreators from "../../store/actions";
import { connect } from "react-redux";

import DataTable from './DataTable';


const Home = ({ loadTickets, tickets }) => {
  // const [isLoading, setPageLoader] = useState(false);

  useEffect(() => {
    loadTickets()
      .then(() => {
        // setPageLoader(false);
      })
      .catch(err => {
        // setPageLoader(false);
      });

  }, []);

  return (
    <Container style={{ padding: 50 }}>
      <h1>Dashboard</h1>
      <DataTable tickets={tickets.tickets}/>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTickets: () => dispatch(actionCreators.loadTickets()),
  };
};

const mapStateToProps = state => {
  return {
    tickets: state.tickets
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
