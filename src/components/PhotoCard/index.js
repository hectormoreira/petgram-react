import React from "react";
import { ImgWrapper, Img, Article } from "./styles";

import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton";
import { useMutationToogleLike } from "../../container/ToggleLikeMutation";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1531523668299-e20047c89111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen();

  const { mutation } = useMutationToogleLike();

  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id },
      },
    });
  };

  return (
    <Article ref={ref}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};

PhotoCard.prototype = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName];
    if (propValue === undefined) {
      return Error(`${propName} value must be defined`);
    }

    if (propValue < 0) {
      return Error(`${propName} value must be greater than 0`);
    }
  },
};
