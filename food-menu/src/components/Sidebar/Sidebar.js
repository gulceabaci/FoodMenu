import React from 'react';
import "./Sidebar.scss";
import { useSidebarContext } from '../../Context/SideBarContext';
import {ImCancelCircle} from 'react-icons/im';
import { Link } from 'react-router-dom';

function Sidebar() {
  const {isSidebarOpen, closeSidebar} = useSidebarContext();

  return (
    <nav className={`sidebar ${isSidebarOpen ? 'sidebar-visible' : ''}`}>
        <button type='button' className='navbar-hide-btn' 
         onClick={() => closeSidebar()}>
          <ImCancelCircle size={24} />
          </button>

          <div className='side-content'>
            <ul className='side-nav'>
              <li className='side-item'>
                <Link to='' className='side-link ls-1 fs-13' 
                 onClick={() => closeSidebar()}>
                  Side link here.
                </Link>
              </li>
            </ul>

          </div>
    </nav>
  )
}

export default Sidebar
