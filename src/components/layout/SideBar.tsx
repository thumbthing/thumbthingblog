import Link from 'next/link';

export default function SideBar() {
  const sideBarMenu = ['my', 'react', 'next.js', 'JavaScript', 'mongoDB'];

  const sideBarList = sideBarMenu.map((item) => {
    const linkUrl = `/${item}`;
    return (
      <li key={item} className="hover:text-emerald-600">
        <Link href={linkUrl} replace>
          {item}
        </Link>
      </li>
    );
  });

  return (
    <aside className="flex-initial m-1 pr-2 border-r-4 border-zinc-200">
      <ul>{sideBarList}</ul>
    </aside>
  );
}
