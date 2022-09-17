import React from 'react';
import {AiFillHome} from 'react-icons/ai';
import {CgGirl} from 'react-icons/cg';
import {BsCardImage} from 'react-icons/bs';
import {GiSkills} from 'react-icons/gi';
import { GiJourney } from 'react-icons/gi';
import {TiContacts} from 'react-icons/ti';
import {MdWorkOutline} from 'react-icons/md';
 
import IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title:'Home',
        path:'/home',
        icon:<AiFillHome/>,
        cname:'nav-text'
    },
    {
        title:'About',
        path:'/about',
        icon:<CgGirl/>,
        cname:'nav-text'
    },
    {
        title:'Projects',
        path:'/projects',
        icon:<BsCardImage/>,
        cname:'nav-text'
    },
    {
        title:'Skills',
        path:'/skills',
        icon:<GiSkills/>,
        cname:'nav-text'
    },  
    {
        title:'Experiences',
        path:'/experience',
        icon:<MdWorkOutline/>,
        cname:'nav-text'
    },  
    {
        title:'Journey',
        path:'/journey',
        icon:<GiJourney/>,
        cname:'nav-text'
    },
    {
        title:'Contact',
        path:'/contact',
        icon:<TiContacts/>,
        cname:'nav-text'
    },  
]
