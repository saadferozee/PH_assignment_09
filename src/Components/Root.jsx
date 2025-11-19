import React from 'react';
import HomeLayout from '../Layouts/HomeLayout';
import AuthProvider from '../Providers/AuthProvider';

const Root = () => {
    return (
        <div>
            <AuthProvider>
                <HomeLayout></HomeLayout>
            </AuthProvider>
        </div>
    );
};

export default Root;