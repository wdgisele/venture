import { HStack, Icon } from '@chakra-ui/react';
import { RiNotificationLine } from 'react-icons/ri';

export function Notifications() {
  return (
    <HStack
      spacing={['6', '8']}
      mx={['6', '8']}
      pr={['6', '8']}
      py="1"
      color="gray.300"
      borderRightWidth={1}
    >
      <Icon as={RiNotificationLine} fontSize="20" />
    </HStack>
  );
}
