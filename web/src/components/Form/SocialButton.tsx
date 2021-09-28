import { Button, Icon } from '@chakra-ui/react';
import { ElementType } from 'react';
import { useAuth, ProviderType } from '../../contexts/AuthContext';

interface SocialButtonProps {
  icon: ElementType;
  name: string;
  action: string;
  provider: ProviderType;
}

export function SocialButton({
  icon,
  name,
  action,
  provider,
}: SocialButtonProps) {
  const { socialAuth } = useAuth();

  return (
    <Button
      color="gray.600"
      variant="outline"
      leftIcon={<Icon as={icon} fontSize="25" />}
      _hover={{ bg: 'white' }}
      m={1}
      onClick={() => socialAuth(provider)}
    >
      {`${action} with ${name}`}
    </Button>
  );
}
