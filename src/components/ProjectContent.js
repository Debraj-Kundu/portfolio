import { Box, Flex, Image, Badge } from '@chakra-ui/react'
import property from '../config/projectConfig'

const ProjectContent = () => {
  function renderProjekt(property, i){
    return (
      <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            shadow="2xl"
            key={i}
          >
            <Image src={property.imageUrl} alt={property.imageAlt} />

            <Box p="6">
              <Box display="flex" alignItems="baseline" gap={4}>
                {property.stack.map((item, i) => {
                  return (
                    <Badge borderRadius="3xl" px="2" colorScheme="teal" key={i}>
                      {item}
                    </Badge>
                  )
                })}
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {property.title}
              </Box>

              <Box display="flex" mt="2" alignItems="center">
                <Box as="span" ml="2" color="blue.200" fontSize="sm">
                  <a href={property.link} rel="noreferrer" target="_blank">
                    {property.link}
                  </a>
                </Box>
              </Box>
            </Box>
          </Box>
    )
  }
  return (
    <Flex gap={16} wrap="wrap" justify="center">
      {property.map((item, i) => {
        return renderProjekt(item, i)
      })}
    </Flex>
  )
}

export default ProjectContent
