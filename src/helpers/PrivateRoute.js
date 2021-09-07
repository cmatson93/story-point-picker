import { Route, Redirect } from 'react-router-dom';
import useLocalStorage from './useLocalStorage';

const PrivateRoute = ({ children, ...rest }) => {
    const [userId] = useLocalStorage('userId', null);

    // TODO: need to check if name is in session user joined

    return (
        <Route
            {...rest}
            render={() => {
                // TODO: instead of redirect show modal?
                return userId ? children : <Redirect to="/" />;
            }}
        />
    );
};

export default PrivateRoute;
