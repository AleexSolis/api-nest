import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Emoji from "../Emoji";
import { withFormik, Form } from "formik";
import { createClinician } from "../client-api/Clinician-client";
import { createPatient } from "../client-api/Patient-client";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Made with <Emoji symbol="❤️" /> from 🇲🇽.
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function SignUp(props) {
  const [state, setState] = React.useState({
    checkedA: false
  });

  const handleChangeSwitch = name => event => {
    setState({ ...state, [name]: event.target.checked });
    values.checked = event.target.checked;
  };
  const classes = useStyles();
  const { isSubmitting, isValid, values, handleChange, errors } = props;

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                variant="outlined"
                label="First Name"
                name="firstName"
                onChange={handleChange}
                values={values.firstName}
                error={errors.firstName ? true : false}
                helperText={errors.firstName}
                fullWidth
                autoFocus
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                variant="outlined"
                label="Last Name"
                name="lastName"
                onChange={handleChange}
                values={values.lastName}
                error={errors.lastName ? true : false}
                helperText={errors.lastName}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                variant="outlined"
                label="User"
                name="user"
                onChange={handleChange}
                values={values.user}
                error={errors.user ? true : false}
                helperText={errors.user}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                variant="outlined"
                label="Email"
                name="email"
                type="email"
                onChange={handleChange}
                values={values.email}
                error={errors.email ? true : false}
                helperText={errors.email}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                variant="outlined"
                label="Password"
                name="password"
                type="password"
                onChange={handleChange}
                values={values.password}
                error={errors.password ? true : false}
                helperText={errors.password}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                variant="outlined"
                label="Password Confirmation"
                name="passwordConfirmation"
                type="password"
                onChange={handleChange}
                values={values.passwordConfirmation}
                error={errors.passwordConfirmation ? true : false}
                helperText={errors.passwordConfirmation}
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Grid container justify="flex-end">
            <Grid item>
              <FormControlLabel
                control={
                  <Switch
                    checked={state.checkedA}
                    onChange={handleChangeSwitch("checkedA")}
                    values={values.checkedA}
                    color="primary"
                  />
                }
                label="Patient"
              />
            </Grid>
          </Grid>
          {state.checkedA && (
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                variant="outlined"
                label="Clinician"
                name="clinician"
                type="clinician"
                onChange={handleChange}
                values={values.clinician}
                error={errors.clinician ? true : false}
                helperText={errors.clinician}
                fullWidth
                required
              />
            </Grid>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isSubmitting || !isValid}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </Form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default withFormik({
  mapPropsToValues(props) {
    return {
      user: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    };
  },
  validate(values) {
    const errors = {};

    if (!values.user) {
      errors.user = "User is requerid.";
    }
    if (!values.firstName) {
      errors.firstName = "First Name is requerid.";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is requerid.";
    }
    if (!values.email) {
      errors.email = "Email is requerid.";
    }
    if (values.password !== values.passwordConfirmation) {
      errors.password = "Passwords do not match.";
    }
    return errors;
  },
  handleSubmit(values, formikBag) {
    if (!values.checked) createClinician(values);
    else createPatient(values);
    formikBag.setSubmitting(false);
    window.location.href = "/";
  }
})(SignUp);
