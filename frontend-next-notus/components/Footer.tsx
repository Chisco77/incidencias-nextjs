import Link from "next/link";

const path = [
  { uid: 21, name: " Home", id: 1, path: "/" },
  { uid: 31, name: "Blog", id: 2, path: "Blog" },
  { uid: 41, name: "About", id: 3, path: "About" },
  {
    uid: 45,
    name: "Copy Right By Rajdeep Singh",
    id: 4,
    path: "https://officialrajdeepsingh.dev/"
  }
];
export default function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          {path.map((value) => {
            return (
              <li key={value.uid}>
                <Link href={value.path} legacyBehavior>
                   {value.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
}
