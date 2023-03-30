<nav>
  <ul>
    {megaMenu.items.map((item) => (
      <li key={item._id}>
        <a href={item.link}>{item.title}</a>
      </li>
    ))}
  </ul>
</nav>
