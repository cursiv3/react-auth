import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const SignUpForm = props => {
  const { onSubmit, onChange, errors, user } = props;
  return (
    <MuiThemeProvider>
      <Card className="container">
        <form action="/" onSubmit={onSubmit}>
          <h2 className="card-heading">Sign Up</h2>

          {errors.summary && <p className="error-message">{errors.summary}</p>}

          <div className="field-line">
            <TextField
              floatingLabelText="Name"
              name="name"
              errorText={errors.name}
              onChange={onChange}
              value={user.name}
            />
          </div>

          <div className="field-line">
            <TextField
              floatingLabelText="Email"
              name="email"
              errorText={errors.email}
              onChange={onChange}
              value={user.email}
            />
          </div>

          <div className="field-line">
            <TextField
              floatingLabelText="Password"
              type="password"
              name="password"
              onChange={onChange}
              errorText={errors.password}
              value={user.password}
            />
          </div>

          <div className="button-line">
            <RaisedButton type="submit" label="Create New Account" primary />
          </div>

          <div onClick={() => props.history.replace('/login')}>
            <p>Already have an account?</p>
          </div>
        </form>
      </Card>
    </MuiThemeProvider>
  );
};

SignUpForm.propTypes = {
  history: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
