import React from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Box,
    VStack,
    Text,
    Link as ChakraLink,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { UserService } from "../../../core/service/user/UserService";

export default function Login() {
    const { control, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        console.log(data);
        try {
            const res = await UserService.Login(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box width="100%" maxW="500px" mx="auto" mt="3rem">
            <form onSubmit={handleSubmit(onSubmit)}>
                <VStack spacing={4}>
                    <Text fontSize="2xl" fontWeight="bold">Iniciar Sessão</Text>
                    <FormControl id="email">
                        <FormLabel>Digite seu e-mail</FormLabel>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Input placeholder="Email" type="email" {...field} />
                            )}
                        />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Senha</FormLabel>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Input placeholder="Senha" type="password" {...field} />
                            )}
                        />
                    </FormControl>
                    <Button width="full" colorScheme="blue" type="submit">
                        Entrar
                    </Button>
                    <Text fontSize="sm">
                        Ainda não tem conta? <ChakraLink as={RouterLink} to="/register" color="blue.500">Registre-se.</ChakraLink>
                    </Text>
                </VStack>
            </form>
        </Box>
    );
}
