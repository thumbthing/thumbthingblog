import Link from 'next/link';
import sideBarData from '../../json/layout/sideBar.json';

export default function SideBar() {
  const sideBarMenu = sideBarData.category;

  const sideBarList = sideBarMenu.map((item) => {
    const linkUrl = `/${item.url}`;
    return (
      <li key={item.url} className="my-1 hover:text-emerald-600">
        <Link href={linkUrl} replace>
          {item.tag}
        </Link>
      </li>
    );
  });

  return (
    <aside className="flex-4 m-1 pr-2 border-r-4 border-zinc-200">
      <ul>{sideBarList}</ul>
    </aside>
  );
}
