import React, { useState, useRef } from 'react';
import { todoCreate } from '~/store/modules/todo/actions';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  IconButton,
  Input,
  Paper,
  Tooltip
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    display: 'flex',
    alignItems: 'center'
  },
  paper: {
    flexGrow: 1,
    padding: 1
  },
  input: {
    width: '100%'
  },
  divider: {
    width: 1,
    height: 24
  }
}));

const NewPost = props => {
  const { className, ...rest } = props;
  const id = useSelector(state => state.auth.user._id);
  const dispatch = useDispatch();
  const classes = useStyles();

  const fileInputRef = useRef(null);

  const [value, setValue] = useState('');

  const handleChange = event => {
    event.persist();
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    setValue('');
    dispatch(todoCreate(id, value));
  };

  const handleKeyPress = event => {
    if (event.keyCode !== 13) {
      console.log(event.keyCode);
      return;
    }
    event.preventDefault();
    setValue('');
    dispatch(todoCreate(id, value));
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <Paper className={classes.paper} elevation={1}>
          <Input
            className={classes.input}
            disableUnderline
            onChange={handleChange}
            value={value}
            placeholder={`Crie um todo`}
            onKeyPress={handleKeyPress}
          />
        </Paper>
        <Tooltip title="Send">
          <IconButton
            color={value.length > 0 ? 'primary' : 'default'}
            onClick={handleSubmit}
          >
            <SendIcon />
          </IconButton>
        </Tooltip>
      </CardContent>
    </Card>
  );
};

NewPost.propTypes = {
  className: PropTypes.string
};

export default NewPost;
