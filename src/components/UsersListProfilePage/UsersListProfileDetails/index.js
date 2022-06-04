import { Box, Container, Typography } from '@mui/material';
import _ from 'lodash';
import React from 'react';
import user from '../../../data/SampleUserDetails.json';
import { getDate, getTime, getYearsDifference } from '../../../utils';
import styles from './usersListProfileDetails.module.css';

const UsersListProfile = (props) => {
    return (
        <Container
            maxWidth="sm"
            sx={{
                display: 'flex',
                flexFlow: 'column'
            }}
        >
            <Box
                component="img"
                src={_.get(user, 'userDetails.thumbnail')}
                sx={{
                    borderRadius: '100%',
                    mx: 'auto'
                }}
            />

            <Box className={styles.userName}>
                <Typography>{_.get(user, 'userDetails.firstName')}</Typography>
                <Typography>{_.get(user, 'userDetails.lastName')}</Typography>
            </Box>

            <Box className={styles.heading}>Personal Details</Box>

            <Box className={styles.containerFlex}>
                <Box className={styles.flexDetail}>
                    <Typography>
                        Date of birth - {getDate(_.get(user, 'userDetails.dob'))}
                    </Typography>
                </Box>

                <Box className={styles.flexDetail}>
                    <Typography>
                        Age - {getYearsDifference(_.get(user, 'userDetails.dob'))}
                    </Typography>
                </Box>
            </Box>

            <Box className={styles.containerFlex}>
                <Box className={styles.flexDetail}>
                    <Typography>
                        Height - {_.get(user, 'otherDetails.physicalDetails.height', '-')}
                    </Typography>
                </Box>

                <Box className={styles.flexDetail}>
                    <Typography>
                        Weight - {_.get(user, 'otherDetails.physicalDetails.weight', '-')}
                    </Typography>
                </Box>
            </Box>

            <Box className={styles.flexDetail}>
                <Typography>Birth time - {getTime(_.get(user, 'userDetails.dob'))}</Typography>
            </Box>

            <Box className={styles.flexDetail}>
                <Typography>
                    Current location - {_.get(user, 'personalDetails.currentAddress.city', '-')},{' '}
                    {_.get(user, 'personalDetails.currentAddress.state', '-')},{' '}
                    {_.get(user, 'personalDetails.currentAddress.country', '-')}-
                    {_.get(user, 'personalDetails.currentAddress.pincode', '-')}
                </Typography>
            </Box>

            <Box
                className={styles.flexDetail}
                sx={{
                    mt: '1rem'
                }}
            >
                <Typography>Education - {_.get(user, 'personalDetails.education', '-')}</Typography>
            </Box>

            <Box className={styles.flexDetail}>
                <Typography>
                    Current occupation - {_.get(user, 'personalDetails.currentOccupation', '-')}
                </Typography>
            </Box>

            <Box className={styles.flexDetail}>
                <Typography>
                    Annual income -{' '}
                    {_.get(user, 'personalDetails.annualIncome').toLocaleString('en-IN') || 0} INR
                </Typography>
            </Box>

            <Box
                className={styles.containerFlex}
                sx={{
                    mb: '1rem'
                }}
            >
                <Box className={styles.flexDetail}>
                    <Typography>Email - {_.get(user, 'userDetails.email', '-')}</Typography>
                </Box>

                <Box className={styles.flexDetail}>
                    <Typography>
                        Contact number - {_.get(user, 'userDetails.contactNumber', '-')}
                    </Typography>
                </Box>
            </Box>

            <Box className={styles.containerFlex}>
                <Box className={styles.flexDetail}>
                    <Typography>
                        Manglik - {_.get(user, 'otherDetails.kundli.manglik', '-')}
                    </Typography>
                </Box>

                <Box className={styles.flexDetail}>
                    <Typography>
                        Marital status - {_.get(user, 'otherDetails.kundli.maritalStatus', '-')}
                    </Typography>
                </Box>
            </Box>

            <Box className={styles.containerFlex}>
                <Box className={styles.flexDetail}>
                    <Typography>
                        Complexion - {_.get(user, 'otherDetails.physicalDetails.complexion', '-')}
                    </Typography>
                </Box>

                <Box className={styles.flexDetail}>
                    <Typography>
                        Diet - {_.get(user, 'otherDetails.physicalDetails.diet', '-')}
                    </Typography>
                </Box>
            </Box>

            <Box className={styles.flexDetail}>
                <Typography>
                    Physical Disability -{' '}
                    {_.get(user, 'otherDetails.physicalDetails.physicalDisability', '-')}
                </Typography>
            </Box>

            <Box
                className={styles.containerFlex}
                sx={{
                    mt: '1rem'
                }}
            >
                <Box className={styles.flexDetail}>
                    <Typography>
                        Religion - {_.get(user, 'otherDetails.religion.religion', '-')}
                    </Typography>
                </Box>

                <Box className={styles.flexDetail}>
                    <Typography>
                        Caste - {_.get(user, 'otherDetails.religion.caste', '-')}
                    </Typography>
                </Box>

                <Box className={styles.flexDetail}>
                    <Typography>
                        Sub Caste - {_.get(user, 'otherDetails.religion.subCaste', '-')}
                    </Typography>
                </Box>
            </Box>

            <Box
                className={styles.flexDetail}
                sx={{
                    mb: '1rem'
                }}
            >
                <Typography>About me - {_.get(user, 'otherDetails.aboutMe', '-')}</Typography>
            </Box>

            <Box className={styles.heading}>Family Details</Box>

            <Box className={styles.flexDetail}>
                <Typography>
                    Father's name - {_.get(user, 'familyDetails.father.name', '-')}
                </Typography>
            </Box>

            <Box className={styles.flexDetail}>
                <Typography>
                    Father's occupation - {_.get(user, 'familyDetails.father.occupation', '-')}
                </Typography>
            </Box>

            <Box className={styles.flexDetail}>
                <Typography>
                    Father's contact number -{' '}
                    {_.get(user, 'familyDetails.father.contactNumber', '-')}
                </Typography>
            </Box>

            <Box
                className={styles.flexDetail}
                sx={{
                    mt: '1rem'
                }}
            >
                <Typography>
                    Mother's name - {_.get(user, 'familyDetails.mother.name', '-')}
                </Typography>
            </Box>

            <Box className={styles.flexDetail}>
                <Typography>
                    Mother's occupation - {_.get(user, 'familyDetails.mother.occupation', '-')}
                </Typography>
            </Box>

            <Box className={styles.flexDetail}>
                <Typography>
                    Mother's contact number -{' '}
                    {_.get(user, 'familyDetails.mother.contactNumber', '-')}
                </Typography>
            </Box>

            <Box className={styles.containerFlex}>
                <Box className={styles.flexDetail}>
                    <Typography>
                        Brothers(Married) -{' '}
                        {_.get(user, 'familyDetails.siblings.brother.count', '-')}(
                        {_.get(user, 'familyDetails.siblings.brother.married', '-')})
                    </Typography>
                </Box>

                <Box className={styles.flexDetail}>
                    <Typography>
                        Sisters(Married) - {_.get(user, 'familyDetails.siblings.sister.count', '-')}
                        ({_.get(user, 'familyDetails.siblings.sister.married', '-')})
                    </Typography>
                </Box>
            </Box>

            <Box className={styles.heading}>Partner Preferences</Box>

            <Box className={styles.containerFlex}>
                <Box className={styles.flexDetail}>
                    <Typography>
                        Minimum age - {_.get(user, 'partnerPreference.minAge', '-')}
                    </Typography>
                </Box>

                <Box className={styles.flexDetail}>
                    <Typography>
                        Maximum age - {_.get(user, 'partnerPreference.maxAge', '-')}
                    </Typography>
                </Box>
            </Box>

            <Box className={styles.flexDetail}>
                <Typography>Caste - {_.get(user, 'partnerPreference.caste', '-')}</Typography>
            </Box>

            <Box className={styles.flexDetail}>
                <Typography>Note - {_.get(user, 'partnerPreference.note', '-')}</Typography>
            </Box>
        </Container>
    );
};

export default UsersListProfile;
