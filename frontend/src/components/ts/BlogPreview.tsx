import type { FC } from "react";

interface IBlogPreviewProps {
  tags: string[];
  date: string;
  title: string;
}

const BlogPreview: FC<IBlogPreviewProps> = (props) => {
  const { tags, date, title } = props;

  return (
    <div className="my-2 w-fit">
      <div className="border border-black p-5 rounded-xl">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="text-sm italic">{tags.join(", ")}</div>
        <div className="">{date}</div>
      </div>
    </div>
  );
};

export default BlogPreview;
