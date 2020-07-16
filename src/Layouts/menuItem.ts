import { MenuItemType } from '@paljs/ui/types';

const items: MenuItemType[] = [
  { title: 'Home Page', icon: { name: 'home' }, link: { href: '/' } },
  {
    title: 'Models',
    icon: { name: 'layers-outline' },
    children: [
      { title: 'Group', link: { href: '/models/Group' } },
      { title: 'Dashboard', link: { href: '/models/Dashboard' } },
      { title: 'User', link: { href: '/models/User' } },
      { title: 'Section', link: { href: '/models/Section' } },
      { title: 'Step', link: { href: '/models/Step' } },
      { title: 'Journal Entry', link: { href: '/models/JournalEntry' } },
      { title: 'Job', link: { href: '/models/Job' } },
      { title: 'Job Run', link: { href: '/models/JobRun' } },
    ],
  },
];
export default items;
