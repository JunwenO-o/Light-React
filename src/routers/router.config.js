/**
 * This file defines the router configuration
 * pages folder file structure should be same as the router config
 */

const router = [
  {
    key: 'Home', // string should be enums same name as component name
    path: '/home',
    meta: {
      // extra info optional
      title: 'Home',
      name: ''
    }
  },
  {
    key: 'ContactUs',
    path: '/contactus',
    meta: {
      title: 'Contact Us',
      icon: ''
    },
    auth: ['admin', 'user'] // set login Required to true
  },
  {
    key: 'Report',
    path: '/report/:id',
    auth: ['admin'],
    children: [
      { key: 'ReportView', path: '/report/:id/view' },
      { key: 'ReportEdit', path: '/report/:id/edit' }
    ]
  },
  {
    key: 'Reports',
    path: '/report',
    meta: { title: 'Reports', icon: '' },
    auth: ['admin']
  },
  {
    key: 'Login',
    path: '/login',
    title: 'Login'
  }
];

export default router;
