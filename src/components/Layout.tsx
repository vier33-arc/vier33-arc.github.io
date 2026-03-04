import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navigation } from './Navigation';

export const Layout = () => {
    return (
        <div className="page-wrapper">
            <Navigation />
            <motion.main
                className="main-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <Outlet />
            </motion.main>
        </div>
    );
};
