import type { FC } from "react";
import { modifyBody } from "../../lib/utils";

interface IImageProps {
  title: string;
  image?: string;
}

const Image: FC<IImageProps> = (props) => {
  const { title, image } = props;
  let imageExists = false;
  if (image !== "") {
    imageExists = true;
  }

  return (
    <>
      {imageExists && (
        <img
          alt={title}
          src={image}
          className="w- mt-4 ml-4 rounded-md border border-white/5 p-2"
        />
      )}
    </>
  );
};

export default Image;
