import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { SidebarContext } from '../context/SidebarContext';

// Navigation data with 3 levels
const navigationData = [
  {
    id: 1,
    title: 'Research',
    path: '/research',
    children: [
      {
        id: 11,
        title: 'Publications',
        path: '/research/publications',
        children: [
          { id: 111, title: 'Papers', path: '/research/publications/papers' },
          { id: 112, title: 'Blog', path: '/research/publications/blog' }
        ]
      },
      {
        id: 12,
        title: 'Areas',
        path: '/research/areas',
        children: [
          { id: 121, title: 'AI Safety', path: '/research/areas/safety' },
          { id: 122, title: 'Robotics', path: '/research/areas/robotics' },
          { id: 123, title: 'Vision', path: '/research/areas/vision' }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Products',
    path: '/products',
    children: [
      {
        id: 21,
        title: 'ChatGPT',
        path: '/products/chatgpt',
        children: [
          { id: 211, title: 'Plus', path: '/products/chatgpt/plus' },
          { id: 212, title: 'Team', path: '/products/chatgpt/team' },
          { id: 213, title: 'Enterprise', path: '/products/chatgpt/enterprise' }
        ]
      },
      {
        id: 22,
        title: 'GPT-4',
        path: '/products/gpt4',
        children: [
          { id: 221, title: 'Overview', path: '/products/gpt4/overview' },
          { id: 222, title: 'Capabilities', path: '/products/gpt4/capabilities' }
        ]
      },
      {
        id: 23,
        title: 'DALL·E',
        path: '/products/dalle',
        children: [
          { id: 231, title: 'Features', path: '/products/dalle/features' },
          { id: 232, title: 'Examples', path: '/products/dalle/examples' }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'API',
    path: '/api',
    children: [
      {
        id: 31,
        title: 'Models',
        path: '/api/models',
        children: [
          { id: 311, title: 'GPT-4', path: '/api/models/gpt4' },
          { id: 312, title: 'GPT-3.5', path: '/api/models/gpt35' },
          { id: 313, title: 'DALL·E', path: '/api/models/dalle' }
        ]
      },
      {
        id: 32,
        title: 'Documentation',
        path: '/api/docs',
        children: [
          { id: 321, title: 'Getting Started', path: '/api/docs/getting-started' },
          { id: 322, title: 'Authentication', path: '/api/docs/authentication' },
          { id: 323, title: 'Rate Limits', path: '/api/docs/rate-limits' }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Safety',
    path: '/safety',
    children: [
      {
        id: 41,
        title: 'Approach',
        path: '/safety/approach',
        children: [
          { id: 411, title: 'Principles', path: '/safety/approach/principles' },
          { id: 412, title: 'Practices', path: '/safety/approach/practices' }
        ]
      },
      {
        id: 42,
        title: 'Research',
        path: '/safety/research',
        children: [
          { id: 421, title: 'Papers', path: '/safety/research/papers' },
          { id: 422, title: 'Projects', path: '/safety/research/projects' }
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Company',
    path: '/company',
    children: [
      {
        id: 51,
        title: 'About',
        path: '/company/about',
        children: [
          { id: 511, title: 'Mission', path: '/company/about/mission' },
          { id: 512, title: 'Team', path: '/company/about/team' },
          { id: 513, title: 'Careers', path: '/company/about/careers' }
        ]
      },
      {
        id: 52,
        title: 'Blog',
        path: '/company/blog',
        children: [
          { id: 521, title: 'Announcements', path: '/company/blog/announcements' },
          { id: 522, title: 'Research', path: '/company/blog/research' }
        ]
      }
    ]
  }
];

// Recursive component for menu items
const MenuItem = ({ item, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  
  const toggleOpen = (e) => {
    if (hasChildren) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <MenuItemContainer level={level}>
      <MenuItemHeader onClick={toggleOpen}>
        <MenuLink to={item.path} $level={level}>
          {item.title}
        </MenuLink>
        {hasChildren && (
          <ToggleIcon>
            {isOpen ? <FaChevronDown /> : <FaChevronRight />}
          </ToggleIcon>
        )}
      </MenuItemHeader>
      
      {hasChildren && isOpen && (
        <SubMenu>
          {item.children.map(child => (
            <MenuItem key={child.id} item={child} level={level + 1} />
          ))}
        </SubMenu>
      )}
    </MenuItemContainer>
  );
};

const Sidebar = () => {
  const { sidebarOpen } = useContext(SidebarContext);

  return (
    <SidebarContainer $isOpen={sidebarOpen}>
      <SidebarContent>
        <Menu>
          {navigationData.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </Menu>
      </SidebarContent>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.aside`
  position: fixed;
  top: 64px;
  left: 0;
  bottom: 0;
  width: 280px;
  background-color: var(--nav-bg);
  border-right: 1px solid var(--border);
  transform: translateX(${props => props.$isOpen ? '0' : '-100%'});
  transition: transform 0.3s ease;
  overflow-y: auto;
  z-index: 900;
`;

const SidebarContent = styled.div`
  padding: 20px 0;
`;

const Menu = styled.ul`
  width: 100%;
`;

const MenuItemContainer = styled.li`
  width: 100%;
  margin-bottom: ${props => props.level === 0 ? '8px' : '0'};
`;

const MenuItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding-right: 16px;
`;

const MenuLink = styled(Link)`
  display: block;
  padding: ${props => {
    switch(props.$level) {
      case 0: return '10px 16px';
      case 1: return '8px 16px 8px 32px';
      case 2: return '6px 16px 6px 48px';
      default: return '6px 16px';
    }
  }};
  font-size: ${props => props.$level === 0 ? '1rem' : '0.9rem'};
  font-weight: ${props => props.$level === 0 ? '500' : '400'};
  color: var(--text);
  transition: var(--transition);
  flex: 1;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const ToggleIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: var(--text);
`;

const SubMenu = styled.ul`
  width: 100%;
`;

export default Sidebar;