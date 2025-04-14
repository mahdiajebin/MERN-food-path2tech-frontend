import { useAuth0 } from '@auth0/auth0-react';
import { useMutation } from '@tanstack/react-query';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

type CreateUserResponse = {
  success: boolean;
  message: string;
  // Add other relevant fields
};

const createMyUserRequest = async (
  user: CreateUserRequest,
  getAccessTokenSilently: () => Promise<string>
): Promise<CreateUserResponse> => {
  const acessToken = await getAccessTokenSilently();

  const response = await fetch(`${API_BASE_URL}/api/my/user`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${acessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error('Failed to create user');
  }

  return response.json();
};


//hook in myuserapi to be able to use anything 
export const useCreateMyUser = () => {
  const {getAccessTokenSilently}  = useAuth0();

  const mutation = useMutation({
    mutationFn: (user: CreateUserRequest) =>
      createMyUserRequest(user, getAccessTokenSilently),
    onError: (error) => {
      // Handle error (e.g., log to an error reporting service)
      console.error('Error creating user:', error);
    },
    onSettled: () => {
      // Optionally, invalidate queries or perform other side effects
    },
  });

  return {
    createUser: mutation.mutateAsync,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,
    error: mutation.error,
    data: mutation.data,
  };
};
