import React from "react";
import { Image, styled } from "@chakra-ui/react";
const PostImage1 = () => {
 
  return (
    <Image
      src="/images/PostImageMain.jpg"
      alt="Post Image"
      borderTopRadius="6px"
     styled={{
      _webkit_transform: "scale(1)",
      transform: "scale(1)",
      webkitTransition: " .3s ease-in-out",
      transition: ".3s ease-in-out",
      _hover: {
      _webkit_transform: "scale(1.3)",
      transform: "scale(1.3)",
    },
     }}
    />
  );
};

export default PostImage1;
