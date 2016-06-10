'use strict';

import React from 'react';

require('styles//Footer.scss');

class FooterComponent extends React.Component {
  render() {
    return (
      <div className="footer-component">
        This is the footer!
      </div>
    );
  }
}

FooterComponent.displayName = 'FooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
