import { Flex, Link, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <footer>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        gap={2}
      >
        <Text>
          Development by{" "}
          <Link
            href="https://byandrev-blog.vercel.app"
            target="_blank"
            color="brand.base"
            fontWeight="bold"
          >
            Andres Parra
          </Link>
        </Text>

        <Text>
          Collaborate here{" "}
          <Link
            href="https://github.com/byandrev/tomatozen"
            target="_blank"
            fontWeight="bold"
          >
            Github
          </Link>
        </Text>
      </Flex>
    </footer>
  );
}

export default Footer;