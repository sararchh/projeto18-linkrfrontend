import { Link } from "react-router-dom";


export default function TrendingList({ trendingList }) {
  return (
    <>
      <h1>trending</h1>

      {trendingList.map((t) => (
        <Link to={`/hashtag/${t.name}`}> <p># {t.name}</p> </Link>

      ))}
    </>
  );
}
