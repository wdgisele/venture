import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Flex, Button, Stack, Text } from '@chakra-ui/react';

import { useAuth } from '../contexts/AuthContext';

import {
  ResetPasswordFormData,
  resetPasswordFormSchema,
} from '../validators/ResetPasswordValidator';

import { Input, SignContainer } from '../components';

export default function ResetPassword() {
  const { resetPassword } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(resetPasswordFormSchema),
  });

  const handleResetPassword: SubmitHandler<ResetPasswordFormData> = async (
    values,
  ) => {
    await resetPassword(values);
  };

  return (
    <SignContainer image="game-forgotpass">
      <Flex w="100%" maxW={360} flexDir="column" p="8">
        <Text
          as="span"
          fontSize="sm"
          color="blue.700"
          mb="10"
          textAlign="center"
        >
          Your password reset will be shown if the registered email exists.
        </Text>
        <Flex
          as="form"
          w="100%"
          maxW={360}
          flexDir="column"
          onSubmit={handleSubmit(handleResetPassword)}
        >
          <Stack spacing="4">
            <Input
              name="email"
              type="email"
              placeholder="email@domain.com"
              error={errors.email}
              {...register('email')}
            />
          </Stack>
          <Button
            type="submit"
            mt="6"
            colorScheme="red"
            size="lg"
            isLoading={isSubmitting}
          >
            Reset Password
          </Button>
        </Flex>
      </Flex>
    </SignContainer>
  );
}
