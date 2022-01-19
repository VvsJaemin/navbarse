import React from 'react';
import * as BsIcons from 'react-icons/bs';
export const SidebarData = [
  {
    id : 1,
    title: '특송',
    path: '/express',
    icon: <BsIcons.BsPersonBoundingBox />,
    cName: 'nav-text'
    
  },
  {
    id : 2,
    title: '주문내역',
    path: '/order',
    icon: <BsIcons.BsFillHouseDoorFill />,
    cName: 'nav-text'
  }
];