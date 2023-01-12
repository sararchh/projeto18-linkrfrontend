import { Link } from "react-router-dom";


export default function TrendingList({ trendingList }) {
  return (
    <>
      <h1>trending</h1>
      <hr/>
      {trendingList.map((t, i) => (
        <Link to={`/hashtag/${t.name}`} key={i}> <p># {t.name}</p> </Link>

      ))}
    </>
  );
}
