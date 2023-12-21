import React, { useState } from 'react'
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
  Input,
  FormErrorMessage,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useToast,
} from '@chakra-ui/react';

import {
  FormControl,
  FormLabel,
  FormHelperText,
} from '@chakra-ui/react';

import { createUser, loginUser } from '../Appwrite/Auth.ts';


export const Modal = ({
  isOpen,
  setIsOpen,
  setUser,
}: {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setUser: React.Dispatch<React.SetStateAction<any>>,
}) => {
  const toast = useToast();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setForm({ ...form, [id]: value });
    let errorMessage = '';
    switch (id) {
      case 'username':
        errorMessage = value.length < 3 ? 'Votre nom d\'utilisateur doit comporter au moins 3 caractères' : '';
        setErrors({ ...errors, username: errorMessage });
        break;
      case 'email':
        errorMessage = !value.includes('@') ? 'Votre email doit être valide' : '';
        setErrors({ ...errors, email: errorMessage });
        break;
      case 'password':
        errorMessage = value.length < 8 ? 'Votre mot de passe doit comporter au moins 8 caractères' : '';
        setErrors({ ...errors, password: errorMessage });
        break;
      case 'confirmPassword':
        errorMessage = value !== form.password ? 'Les mots de passe ne correspondent pas' : '';
        setErrors({ ...errors, confirmPassword: errorMessage });
        break;
      default:
        setForm({ ...form, [id]: value });
        break;
    }


  };

  const handleLogin = async () => {
    try {
      await loginUser({ email: form.email, password: form.password });
      setUser({ username: form.username, email: form.email });
      setIsOpen(false);
      createToast('Vous êtes connecté');
    } catch (error) {
      console.log(error);
    }
  }

  const createToast = (message: string) => {
    return (
      toast({
        title: message,
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    )
  }


  const handleCreateAccount = async () => {
    if (!Object.values(errors).some(error => error !== '') && Object.values(form).every(value => value !== '') && form.password === form.confirmPassword) {
      try {
        await createUser({ email: form.email, password: form.password, name: form.username });
        setUser({ username: form.username, email: form.email });
        setIsOpen(false);
        createToast('Votre compte a bien été créé');
      } catch (error) {
        console.log(error);
      }
    }
  }


  return (
      <div>
        <ChakraModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalOverlay />
          <ModalContent>
            <Tabs isFitted colorScheme='blue' variant='enclosed'>
              <TabList mb='1em'>
                <Tab fontWeight={'bold'}>Se connecter</Tab>
                <Tab fontWeight={'bold'}>S'inscrire</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <ModalBody>
                    <FormControl id="email" isRequired mb={5} onChange={handleInputChange} isInvalid={!!errors.email}>
                      <FormLabel>Email address</FormLabel>
                      <Input type="email" />
                      {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
                      <FormHelperText>Cette application est une démo, votre email ne sera pas utilisé</FormHelperText>
                    </FormControl>
                    <FormControl id="password" isRequired mb={5} onChange={handleInputChange} isInvalid={!!errors.password}>
                      <FormLabel>Password</FormLabel>
                      <Input type='password' />
                      {errors.password && <FormErrorMessage>{errors.password}</FormErrorMessage>}
                      <FormHelperText>Votre mot de passe doit comporter au moins 8 caractères</FormHelperText>
                    </FormControl>
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={handleLogin}>
                      Se connecter
                    </Button>
                    <Button variant="ghost" onClick={() => setIsOpen(false)}>Annuler</Button>
                  </ModalFooter>
                </TabPanel>
                <TabPanel>
                  <ModalBody>
                    <FormControl id="username" isRequired mb={5} onChange={handleInputChange} isInvalid={!!errors.username}>
                      <FormLabel>Nom d'utilisateur</FormLabel>
                      <Input type="text" />
                      {errors.username && <FormErrorMessage>{errors.username}</FormErrorMessage>}
                    </FormControl>
                    <FormControl id="email" isRequired mb={5} onChange={handleInputChange} isInvalid={!!errors.email}>
                      <FormLabel>Email address</FormLabel>
                      <Input type="email" />
                      {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
                      <FormHelperText>Cette application est une démo, votre email ne sera pas utilisé</FormHelperText>
                    </FormControl>
                    <FormControl id="password" isRequired mb={5} onChange={handleInputChange} isInvalid={!!errors.password}>
                      <FormLabel>Password</FormLabel>
                      <Input type='password' />
                      {errors.password && <FormErrorMessage>{errors.password}</FormErrorMessage>}
                      <FormHelperText>Votre mot de passe doit comporter au moins 8 caractères</FormHelperText>
                    </FormControl>
                    <FormControl id="confirmPassword" isRequired onChange={handleInputChange} isInvalid={!!errors.confirmPassword}>
                      <FormLabel>Confirmer votre mot de passe</FormLabel>
                      <Input type='password' />
                      {errors.confirmPassword && <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>}
                    </FormControl>
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={handleCreateAccount}>
                      S'inscrire
                    </Button>
                    <Button variant="ghost" onClick={() => setIsOpen(false)}>Annuler</Button>
                  </ModalFooter>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalContent>
          <ModalBody>
            <FormControl id="username" isRequired mb={5} onChange={handleInputChange} isInvalid={!!errors.username}>
              <FormLabel>Nom d'utilisateur</FormLabel>
              <Input type="text" />
              {errors.username && <FormErrorMessage>{errors.username}</FormErrorMessage>}
            </FormControl>
            <FormControl id="email" isRequired mb={5} onChange={handleInputChange} isInvalid={!!errors.email}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
              {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
              <FormHelperText>Cette application est une démo, votre email ne sera pas utilisé</FormHelperText>
            </FormControl>
            <FormControl id="password" isRequired mb={5} onChange={handleInputChange} isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <Input type='password' />
              {errors.password && <FormErrorMessage>{errors.password}</FormErrorMessage>}
              <FormHelperText>Votre mot de passe doit comporter au moins 8 caractères</FormHelperText>
            </FormControl>
            <FormControl id="confirmPassword" isRequired onChange={handleInputChange} isInvalid={!!errors.confirmPassword}>
              <FormLabel>Confirmer votre mot de passe</FormLabel>
              <Input type='password' />
              {errors.confirmPassword && <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleLogin}>
              Se connecter
            </Button>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>Annuler</Button>
          </ModalFooter>
        </ChakraModal>
      </div>
  )
}
