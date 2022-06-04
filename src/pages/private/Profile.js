import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { handleFetchUserDetails } from '../../slices/dashboard/usersDetailsSlice';

const Profile = () => {
    const dispatch = useDispatch();
    const { _id } = useParams();

    useEffect(() => {
        dispatch(handleFetchUserDetails(_id));
    }, []);

    return <div>Profile</div>;
};

export default Profile;
