import React from 'react';

import Navbar from './Navbar';

export default{
    title:'Navbar',
    component:Navbar
}

export const Primary = () => <Navbar variant='primary'>Primary</Navbar>
export const Secondary = () => <Navbar variant='secondary'>Secondary</Navbar>