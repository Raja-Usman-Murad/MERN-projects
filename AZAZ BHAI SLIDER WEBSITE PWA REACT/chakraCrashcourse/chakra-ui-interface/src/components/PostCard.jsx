import React from "react";
import {
  Avatar,
  HStack,
  Stack,
  Text,
  VStack,
  Heading,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PostImageOne, PostImageTwo, PostImageThree } from "./PostImage";
import  { AvatarPostPage, AvatarPostPage1, AvatarPostPage2 } from "./Avatar/AvatarPage"

const PostCard1 = () => {
  return (
    <Flex justify="center" align="center">
      <Stack width="320px" boxShadow="md" borderRadius="xl">
        <PostImageOne />
        <Stack padding={2}>
            <AvatarPostPage size="sm" />
          <VStack align="flex-start">
            <Heading fontSize="lg">Well Come To Chackra UI in React</Heading>
            <Text fontSize="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, ipsam!
            </Text>
            <Text fontSize="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, ipsam!
            </Text>
            <Text fontSize="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, ipsam!
            </Text>
            <HStack justify="space-between" w="full">
              <Button size="sm" as={Link} to="/post">
                View Post
              </Button>
              <Button size="sm" as={Link} to="/gallery">
                Post Gallery
              </Button>
            </HStack>
          </VStack>
        </Stack>
      </Stack>
    </Flex>
  );
};

const PostCard2 = () => {
  return (
    <Flex justify="center" align="center">
      <Stack width="320px" boxShadow="md" borderRadius="xl">
        <PostImageTwo />
        <Stack padding={2}>
            <AvatarPostPage1 size="sm" />
          <VStack align="flex-start">
            <Heading fontSize="lg">Well Come To Chackra UI in React</Heading>
            <Text fontSize="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, ipsam!
            </Text>
            <Text fontSize="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, ipsam!
            </Text>
            <Text fontSize="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, ipsam!
            </Text>
            <HStack justify="space-between" w="full">
              <Button size="sm" as={Link} to="/post1">
                View Post
              </Button>
              <Button size="sm" as={Link} to="/gallery">
                Post Gallery
              </Button>
            </HStack>
          </VStack>
        </Stack>
      </Stack>
    </Flex>
  );
};

const PostCard3 = () => {
  return (
    <Flex justify="center" align="center">
      <Stack width="320px" boxShadow="md" borderRadius="xl">
        <PostImageThree />
        <Stack padding={2}>
            <AvatarPostPage2 size="sm" />
          <VStack align="flex-start">
            <Heading fontSize="lg">Well Come To Chackra UI in React</Heading>
            <Text fontSize="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, ipsam!
            </Text>
            <Text fontSize="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, ipsam!
            </Text>
            <Text fontSize="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, ipsam!
            </Text>
            <HStack justify="space-between" w="full">
              <Button size="sm" as={Link} to="/post2">
                View Post
              </Button>
              <Button size="sm" as={Link} to="/gallery">
                Post Gallery
              </Button>
            </HStack>
          </VStack>
        </Stack>
      </Stack>
    </Flex>
  );
};

export { PostCard1, PostCard2, PostCard3 };
