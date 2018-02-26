import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import openLauncher from 'assets/launcher_button.svg';
import close from 'assets/clear-button.svg';
import './style.scss';

const Launcher = ({ toggle, chatOpened, openLauncherImg }) =>
  <button type="button" className={chatOpened ? 'launcher hide-sm' : 'launcher'} onClick={toggle}>
    {
      chatOpened ?
        <img src={close} className="close-launcher" alt="" /> :
        <img src={openLauncherImg ? openLauncherImg : openLauncher } className="open-launcher" alt="" />
    }
  </button>;

Launcher.propTypes = {
  toggle: PropTypes.func,
  chatOpened: PropTypes.bool,
  openLauncherImg: PropTypes.string
};

export default connect(store => ({
  chatOpened: store.behavior.get('showChat')
}))(Launcher);
