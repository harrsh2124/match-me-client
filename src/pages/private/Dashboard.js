import { Box, CircularProgress, Container, Pagination } from '@mui/material';
import _ from 'lodash';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../../components/Dashboard/UserCard';
import { handleFetchUsersList } from '../../slices/dashboard/usersListSlice';

const Dashboard = () => {
    const { users, pagination, isLoading } = useSelector((state) => state.usersList);
    const dispatch = useDispatch();

    const [usersList, setUsersList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (!users.length) {
            setUsersList([]);
            fetchUsers();
        } else {
            console.log(users, pagination);
            setUsersList([...users]);
        }

        // eslint-disable-next-line
    }, [users, currentPage]);

    const fetchUsers = (page) => {
        dispatch(
            handleFetchUsersList({
                page: page || currentPage
            })
        );
    };

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        fetchUsers(value);
    };

    return (
        <Container
            sx={{
                py: '1rem'
            }}
        >
            {isLoading ? (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '80vh'
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <Fragment>
                    <Box
                        sx={{
                            display: 'flex',
                            flexFlow: 'column',
                            gap: '1rem',
                            my: '1rem'
                        }}
                    >
                        {usersList.map((user) => {
                            return <UserCard key={user._id} user={user} />;
                        })}
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Pagination
                            count={_.get(pagination, 'totalPages', 1)}
                            page={_.get(pagination, 'currentPage', 1)}
                            variant="outlined"
                            onChange={handlePageChange}
                        />
                    </Box>
                </Fragment>
            )}
        </Container>
    );
};

export default Dashboard;
