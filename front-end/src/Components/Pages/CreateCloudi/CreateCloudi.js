import React, { Component } from 'react'
import ButtonClass from '../../../Factory/Button/ButtonClass'
import formArray from './CreateCloudiConfig';
import { ValidatorForm } from 'react-material-ui-form-validator';
import Input from '../../../Factory/Input/index';
import Spinner from '../../../Factory/Spinner/index';
import { connect } from 'react-redux';
import { CreateCloudi } from '../../../redux/action/cloudiAction';
