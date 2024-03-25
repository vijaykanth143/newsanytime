import Link from "next/link";

const NewsList = () => {
  return (
    <div>
      <h1>News List</h1>
      <ul style={{ listStyle: "none" }}>
        <Link href="/newslist/1">
          <li style={{ cursor: "pointer" }}>News 1</li>
        </Link>
        <Link href="/newslist/2">
          <li style={{ cursor: "pointer" }}>News 2</li>
        </Link>

        <Link href="/newslist/3">
          <li style={{ cursor: "pointer" }}>News 3</li>
        </Link>
      </ul>
    </div>
  );
};

export default NewsList;
