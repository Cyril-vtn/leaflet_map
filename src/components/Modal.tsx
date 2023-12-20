import React, { useState } from 'react'
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';

import {
  FormControl,
  FormLabel,
  FormHelperText,
} from '@chakra-ui/react';

import { loginUser } from '../Appwrite/Auth.ts';


export const Modal = ({
  isOpen,
  setIsOpen,
  setUser,
}: {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setUser: React.Dispatch<React.SetStateAction<any>>,
}) => {

  const  [form, setForm] = useState({
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


  const handleForm = async () => {
    if(!Object.values(errors).some(error => error !== '')) {
      try {
        await loginUser({email: form.email, password: form.password});
        setUser({username: form.username, email: form.email});
        setIsOpen(false);
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
          <ModalHeader>Se connecter</ModalHeader>
          <ModalCloseButton />
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
            <Button colorScheme="blue" mr={3} onClick={handleForm}>
              Se connecter
            </Button>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>Annuler</Button>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>

    </div>

  )
}
