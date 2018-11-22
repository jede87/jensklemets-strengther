import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

class StartPage extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return (
			<React.Fragment>
				<Grid container>
					<Grid item>
						<h2>HOME</h2>
						<p>My Material Grid container</p>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}
}
// StartPage.propTypes = {
// };

export default StartPage;
