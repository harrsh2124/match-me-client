import { Route, Routes } from 'react-router-dom';
import { Dashboard, Profile } from '../../pages/private';
import { SignIn, SignUp, VerifyUser } from '../../pages/public';

const IndexRouter = () => {
    return (
        <Routes>
            <Route path="/signin" element={<SignIn />} />

            <Route path="/signup" element={<SignUp />} />

            <Route path="/verify-user" element={<VerifyUser />} />

            <Route path="/profile/:_id" element={<Profile />} />

            <Route path="/" element={<Dashboard />} />
        </Routes>
    );
};

export default IndexRouter;
