import {
  Container,
  Heading,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";
import React from "react";
import AccordionSection from "../../components/Accordian/AccordionSection";
import { AvatarPostPage } from "../../components/Avatar/AvatarPage";
import PostText from "../../components/PostText/PostText";
import { Link } from "react-router-dom";

const PostPage = () => {
  return (
    <Container maxW="container.xl">
      <Stack spacing={4} mt={8} mb={8}>
        <Heading fontSize="2xl" textTransform="capitalize">
          Well Come to Chakra UI Component Post
        </Heading>
        <Image
        src="/post1.jpg"
        alt="Post Image"
        borderTopRadius="6px"
      />
        <AvatarPostPage />
        <PostText />
        <AccordionSection />
        <Button alignSelf="flex-start" size="sm" as={Link} to="/">
              Back To Home
        </Button>
      </Stack>
    </Container>
  );
};

export default PostPage;
