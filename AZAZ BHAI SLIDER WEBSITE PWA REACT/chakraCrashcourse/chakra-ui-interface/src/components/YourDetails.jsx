import React from 'react'
import { VStack, Heading, Text, SimpleGrid, FormControl, FormLabel, Input, Select, Checkbox, Button, GridItem, Textarea } from '@chakra-ui/react'
const YourDetails = () => {
  return (
    <VStack
          w="full"
          h="full"
          p={10}
          spacing={10}
          align="flex-start"
        >
          <VStack spacing={2} align="flex-start">
          <Heading>Your details</Heading>
          <Text>if you already have an account, click here to log in.</Text>
          </VStack>
          <SimpleGrid columns={2} columnGap={3} rowGap= {4}>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>
                  First Name
                </FormLabel>
                <Input placeholder="Enter First Name" />
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>
                  Last Name
                </FormLabel>
                <Input placeholder="Enter First Name" />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>
                  Address
                </FormLabel>
                <Textarea placeholder="Enter Your Address" />
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>
                  City
                </FormLabel>
                <Input placeholder="Enter City" />
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>
                  Country
                </FormLabel>
                <Select placeholder="Select Country">
                  <option value="pakistan">Pakistan</option>
                </Select>
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl>
                <Checkbox>Ship to the billing address.</Checkbox>
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <Button variants="primary" w="full" size="lg">Place Items</Button>
            </GridItem>
          </SimpleGrid>
        </VStack>
  )
}

export default YourDetails
