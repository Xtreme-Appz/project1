import React from 'react';
import Link from 'next/link';
import { Box, Flex, Text, Button, Input } from '@modulz/radix';

const Navbar = () => {
  return (
    <Box as="nav" sx={{ bg: 'dark', color: 'green', p: 4 }}>
      <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/">
          <a>
            <Text as="h1" sx={{ color: 'green', fontSize: 4 }}>
              Culti-Club
            </Text>
          </a>
        </Link>
        <Box>
          <Input placeholder="Search strains..." sx={{ mr: 3 }} />
          <Link href="/login">
            <a>
              <Button variant="ghost" sx={{ color: 'green', mr: 2 }}>
                Login
              </Button>
            </a>
          </Link>
          <Link href="/signup">
            <a>
              <Button variant="ghost" sx={{ color: 'green' }}>
                Sign Up
              </Button>
            </a>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;