import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from './components/routes';
import { Main } from './routes/main';

const Router = () => {
  return (
    <Switch>
      <PublicRoute path="/" exact restricted={false} component={Main}></PublicRoute>
      <PublicRoute path="/post" exact restricted={false} component={() => <div>Post</div>}></PublicRoute>
      <PrivateRoute path="/mypage" exact component={() => <div>my page</div>}></PrivateRoute>
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Router;
