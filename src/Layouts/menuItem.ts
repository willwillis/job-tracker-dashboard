import { MenuItemType } from '@paljs/ui/types';

const items: MenuItemType[] = [
  // { title: 'Home', icon: { name: 'home' }, link: { href: '/' } },
  {
    title: 'Dashboard Admin',
    icon: { name: 'layers-outline' },
    children: [
      { title: 'Dashboard', link: { href: '/models/Dashboard' } },
      { title: 'Section', link: { href: '/models/Section' } },
      { title: 'Step', link: { href: '/models/Step' } },
      { title: 'Job', link: { href: '/models/Job' } },
      { title: 'Job Run', link: { href: '/models/JobRun' } },
      { title: 'Journal Entry', link: { href: '/models/JournalEntry' } },
    ],
  },
  {
    // only Display if User.isAdmin == true
    title: 'User Admin',
    icon: { name: 'people-outline' },
    children: [
      { title: 'User', link: { href: '/models/User' } },
      { title: 'Group', link: { href: '/models/Group' } },
    ],
  },
  {
    // only Display if User.isAdmin == true
    title: 'Config',
    link: { href: '/models/config' },
    icon: { name: 'settings-2-outline' },
  },
];
export default items;
