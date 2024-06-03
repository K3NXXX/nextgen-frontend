'use client'; 

import { ClerkProvider } from '@clerk/nextjs';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { store } from '@/redux/store';
import 'react-toastify/dist/ReactToastify.css';

const ClientProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <ClerkProvider>
                {children}
                <ToastContainer position="bottom-right" />
            </ClerkProvider>
        </Provider>
    );
};

export default ClientProviders;