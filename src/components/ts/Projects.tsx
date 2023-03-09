import type { FC } from "react";
import { modifyBody } from "../../lib/utils";

interface IBlogPreviewProps {
  title: string;
  tags: string[];
  body: string;
  image?: string;
}

const BlogPreview: FC<IBlogPreviewProps> = (props) => {
  const { title, tags, body, image } = props;
  let imageExists = false;
  if (image !== "") {
    imageExists = true;
  }

  return (
    <div className="my-2 w-fit">
      <div className={`${imageExists ? "mx-4 grid lg:grid-cols-2" : "mx-4"}`}>
        <div>
          <h1 className="text-xl font-bold">{title}</h1>
          <div className="text-sm">{tags.join(", ")}</div>
          <div className="mt-2 text-white">{modifyBody(body)}</div>
        </div>
        {imageExists && (
          <img
            alt={title}
            src={image}
            className="w- mt-4 ml-4 rounded-md border border-white/5 p-2"
          />
        )}
      </div>
    </div>
  );
};

export default BlogPreview;
