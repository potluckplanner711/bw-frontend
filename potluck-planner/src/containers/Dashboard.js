import React from 'react';
import { withRouter } from 'react-router-dom';
import { PrivateRoute } from '.././utils/PrivateRoute';

import DashboardHeader from '../components/DashboardComponents/DashboardHeader';
import PotluckCard from '../containers/PotluckCard';
import AddPotluckForm from './AddPotluckForm';
import PotluckList from './PotluckList';
import UpdatePotluck from './UpdatePotluck';

const Dashboard = props => {
    const { path } = props.match;
    return (
        <div className="">
            <DashboardHeader />
            <PrivateRoute
                exact
                path={`${path}`}
                component={PotluckList}
                redirectURL='/'
            />
            <PrivateRoute
                exact
                path={`${path}/addEvent`}
                component={AddPotluckForm}
                redirectURL='/'
            />
            <PrivateRoute
                exact
                path={`${path}/event/:eventID`}
                component={PotluckCard}
                redirectURL='/'
            />
            <PrivateRoute
                path={`${path}/event/:eventID/update`}
                component={UpdatePotluck}
                redirectURL='/'
            />
        </div>
    );
};

export default withRouter(Dashboard);
