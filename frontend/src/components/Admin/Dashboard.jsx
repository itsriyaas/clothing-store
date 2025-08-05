import { useEffect, useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';

const Dashboard = ({ activeTab, children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(true);

  return (
    <>
      <main className="flex min-h-screen mt-14">

        {toggleSidebar && (
          <Sidebar activeTab={activeTab} setToggleSidebar={setToggleSidebar} />
        )}

        <div className={`w-full ${toggleSidebar ? 'sm:ml-72' : ''} transition-all duration-300`}>
          <div className="flex flex-col gap-6 sm:m-8 p-2 pb-6 overflow-hidden">
            {!toggleSidebar && (
              <button
                onClick={() => setToggleSidebar(true)}
                className="bg-gray-700 w-10 h-10 rounded-full shadow text-white flex items-center justify-center"
                title="Open Sidebar"
              >
                <MenuIcon />
              </button>
            )}

            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
