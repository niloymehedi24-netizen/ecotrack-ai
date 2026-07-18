"use client";

import { createContext, useContext } from "react";

import {
    useQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import axiosInstance from "@/lib/axios";


export type UserRole = "USER" | "ADMIN";


export interface AuthUser {
    _id: string;
    name: string;
    email: string;
    role: UserRole;
}


interface AuthContextType {
    user: AuthUser | null;
    loading: boolean;
    logout: () => void;
    refreshUser: () => void;
}



const AuthContext =
    createContext<AuthContextType | undefined>(
        undefined
    );




const getCurrentUser = async () => {

    const response =
        await axiosInstance.get(
            "/auth/me"
        );

    return response.data.user as AuthUser;

};




export default function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {


    const queryClient =
        useQueryClient();




    const {
        data: user,
        isLoading,
    } = useQuery({

        queryKey: ["current-user"],

        queryFn: getCurrentUser,

        retry: false,

    });





    const logoutMutation =
        useMutation({

            mutationFn: async () => {

                await axiosInstance.post(
                    "/auth/logout"
                );

            },


            onSuccess: () => {

                queryClient.removeQueries({
                    queryKey: ["current-user"],
                });

            },

        });





    const refreshUser = () => {

        queryClient.invalidateQueries({
            queryKey: ["current-user"],
        });

    };





    return (

        <AuthContext.Provider

            value={{

                user: user ?? null,

                loading: isLoading,

                logout: logoutMutation.mutate,

                refreshUser,

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}






export const useAuthContext = () => {

    const context =
        useContext(AuthContext);


    if (!context) {

        throw new Error(
            "useAuthContext must be used inside AuthProvider"
        );

    }


    return context;

};