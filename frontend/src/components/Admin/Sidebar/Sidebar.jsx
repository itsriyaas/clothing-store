import { Link, useNavigate } from 'react-router-dom';
import {
  Equalizer as EqualizerIcon,
  ShoppingBag as ShoppingBagIcon,
  Inventory as InventoryIcon,
  Group as GroupIcon,
  Reviews as ReviewsIcon,
  AddBox as AddBoxIcon,
  Logout as LogoutIcon,
  AccountBox as AccountBoxIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { logoutUser } from '../../../actions/userAction';
import './Sidebar.css';

const navMenu = [
  { icon: <EqualizerIcon />, label: "Dashboard", ref: "/admin/dashboard" },
  { icon: <ShoppingBagIcon />, label: "Orders", ref: "/admin/orders" },
  { icon: <InventoryIcon />, label: "Products", ref: "/admin/products" },
  { icon: <AddBoxIcon />, label: "Add Product", ref: "/admin/new_product" },
  { icon: <GroupIcon />, label: "Users", ref: "/admin/users" },
  { icon: <ReviewsIcon />, label: "Reviews", ref: "/admin/reviews" },
  { icon: <AccountBoxIcon />, label: "My Profile", ref: "/account" },
  { icon: <LogoutIcon />, label: "Logout" },
];

const Sidebar = ({ activeTab, setToggleSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    enqueueSnackbar("Logout Successfully", { variant: "success" });
    navigate("/login");
  };

  return (
    <aside className="sidebar z-20 fixed top-0 left-0 h-full w-3/4 sm:w-1/5 bg-gray-800 text-white shadow-lg transition-transform duration-300 overflow-y-auto">
      
      {/* User Info Header */}
      <div className="flex items-center gap-3 bg-gray-700 p-3 mx-3.5 mt-4 rounded-lg shadow">
        <Avatar alt="Avatar" src={user?.avatar?.url} />
        <div className="flex-grow">
          <p className="font-medium text-lg">{user?.name}</p>
          <p className="text-gray-300 text-sm">{user?.email}</p>
        </div>
        
        {/* Close button for all screens */}
        {setToggleSidebar && (
          <button
            onClick={() => setToggleSidebar(false)}
            className="bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-600 transition"
            title="Close Sidebar"
          >
            <CloseIcon fontSize="small" />
          </button>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="mt-6 flex flex-col gap-1">
        {navMenu.map((item, index) => {
          const isActive = activeTab === index;
          const commonClasses = "flex items-center gap-3 py-3 px-5 font-medium transition hover:bg-gray-700";

          return item.label === "Logout" ? (
            <button
              key={index}
              onClick={handleLogout}
              className={commonClasses}
            >
              {item.icon}
              {item.label}
            </button>
          ) : (
            <Link
              key={index}
              to={item.ref}
              className={`${commonClasses} ${isActive ? "bg-gray-700" : ""}`}
              onClick={() => setToggleSidebar?.(false)}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer Credit */}
      <div className="mt-20 mx-3.5 p-3 rounded-lg bg-gray-700 text-sm text-gray-200 shadow-inner">
        <p>Developed with ❤️ by:</p>
        <a
          href="https://www.linkedin.com/in/itsriyas"
          target="_blank"
          rel="noreferrer"
          className="block font-semibold text-white hover:text-blue-400"
        >
          Itsriyas
        </a>
        <a
          href="mailto:mohamedriyas.dev@gmail.com"
          className="hover:text-blue-400"
        >
          mohamedriyas.dev@gmail.com
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
