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

export default function Register() {
    const {
        handleSubmit,
        reset,
        watch,
        control,
        setValue,
        getValues,
        formState: { errors, touchedFields },
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = async (data: any) => {
        console.log(data);
        try {
            const res = await UserService.Login(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box width="100%" maxW="500px" mx="auto" mt="3rem" >
            <form onSubmit={handleSubmit(onSubmit)}>
                <VStack spacing={2}>
                    <Text fontSize="2xl" fontWeight="bold">Criar Conta</Text>
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
                    <FormControl id="firstName">
                        <FormLabel>Nome</FormLabel>
                        <Controller
                            name="firstName"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Input placeholder="Nome" type="text" {...field} />
                            )}
                        />
                    </FormControl>
                    <FormControl id="lastName">
                        <FormLabel>Sobrenome</FormLabel>
                        <Controller
                            name="lastName"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Input placeholder="Sobrenome" type="text" {...field} />
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
                    <FormControl id="confirmpassword">
                        <FormLabel>Confirmar Senha</FormLabel>
                        <Controller
                            name="confirmpassword"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Input placeholder="Confirmar Senha" type="password" {...field} />
                            )}
                        />
                    </FormControl>
                    <br/>
                    <Button width="full" colorScheme="blue" type="submit">
                        Criar Conta
                    </Button>
                    <Text fontSize="sm">
                        Já tem conta? <ChakraLink as={RouterLink} to="/login" color="blue.500">Iniciar Sessão</ChakraLink>
                    </Text>
                </VStack>
            </form>
        </Box>
    );
}
