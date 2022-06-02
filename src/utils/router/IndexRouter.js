import { Route, Routes } from 'react-router-dom';
import { SignIn, SignUp, VerifyUser } from '../../pages/public';

const IndexRouter = () => {
    return (
        <Routes>
            <Route path="/signin" element={<SignIn />} />

            <Route path="/signup" element={<SignUp />} />

            <Route path="/verify-user" element={<VerifyUser />} />
        </Routes>
    );
};

export default IndexRouter;
