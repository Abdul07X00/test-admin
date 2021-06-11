import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Divider,
  Button,
  CardActions,
  LinearProgress,
} from "@material-ui/core";
import * as actionCreators from "../../store/actions";
import { connect } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Snackbar from "@material-ui/core/snackbar";
import Alert from "@material-ui/lab/Alert";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("mail is required"),
  phone: Yup.string().required("Mobile is required"),
});

const initialValues = {
  title: "",
  description: "",
  name: "",
  email: "",
  phone: "",
};

const Home = ({ createTicket, progress }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {}, []);

  const { handleSubmit, register, errors, control, setValue } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit = (data, e) => {
    setSuccess(false)
    setError(false)
    setIsSubmitting(true);
    const body = {
      title: data.title,
      description: data.description,
      name: data.name,
      email: data.email,
      phone: data.phone,
    };
    createTicket(body)
      .then((msg) => {
        setIsSubmitting(false);
        setSuccess(true)
        return;
      })
      .catch((err) => {
        console.error(err);
        setIsSubmitting(false);
        setError(true)
      });
  };

  const onError = (errors, e) => {
    console.log(errors, e);
    setIsSubmitting(false);
  };

  return (
    <Container style={{ padding: 50 }}>
      <Card raised>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <CardHeader title={"Contact Us"} />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Title"
                  type="text"
                  name="title"
                  variant="outlined"
                  fullWidth
                  error={Boolean(errors?.titless?.message)}
                  helperText={errors.title?.message}
                  inputRef={register}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Description"
                  type="text"
                  name="description"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  error={Boolean(errors?.description?.message)}
                  helperText={errors.description?.message}
                  inputRef={register}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Name"
                  type="text"
                  name="name"
                  variant="outlined"
                  fullWidth
                  error={Boolean(errors?.name?.message)}
                  helperText={errors.name?.message}
                  inputRef={register}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Email"
                  type="text"
                  name="email"
                  variant="outlined"
                  fullWidth
                  error={Boolean(errors?.email?.message)}
                  helperText={errors.email?.message}
                  inputRef={register}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Mobile"
                  type="text"
                  name="phone"
                  variant="outlined"
                  fullWidth
                  error={Boolean(errors?.phone?.message)}
                  helperText={errors.phone?.message}
                  inputRef={register}
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
          </CardContent>
          <Divider />
          {progress > 0 && (
            <LinearProgress variant="determinate" value={progress} />
          )}
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={Boolean(progress > 0 || isSubmitting)}
            >
              {"Send Message"}
            </Button>
          </CardActions>
        </form>
      </Card>
      <Snackbar open={success} autoHideDuration={100}>
        <Alert
          // onClose={handleClose}
          severity="success"
        >
          Success sent message!
        </Alert>
      </Snackbar>
      <Snackbar open={error} autoHideDuration={100}>
        <Alert severity="error">Error in sending message! Try again.</Alert>
      </Snackbar>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTicket: (body) => dispatch(actionCreators.createTicket(body)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
