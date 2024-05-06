import { useSearchParams, useParams } from "react-router-dom";

const Article = () => {
  const [params] = useSearchParams();
  // searchParams传参
  const id = params.get("id");
  const name = params.get("name");
  // params传参
  const paramsy = useParams();
  const idParam = paramsy.id;
  const nameu = paramsy.name;
  return (
    <div>
      文章---searchParams传参，id是{id},name是{name}
      <div>
        文章---params传参，id是{idParam},name是{nameu}
      </div>
    </div>
  );
};

export default Article;
