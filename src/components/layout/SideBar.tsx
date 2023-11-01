export default function SideBar() {
  const sideBarMenu = ['my', 'react', 'next.js', 'JavaScript', 'mongoDB'];

  const sideBarList = sideBarMenu.map((item) => <li key={item}>{item}</li>);

  return (
    <aside>
      <ul>{sideBarList}</ul>
    </aside>
  );
}
