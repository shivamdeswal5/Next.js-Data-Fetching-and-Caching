"use client";
import { addUser } from "../../actions/actions"; 
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField, Box } from "@mui/material";
import { useRouter } from "next/navigation";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email(),
});

type FormData = {
  name: string;
  email: string;
};

export default function AddUser() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const router = useRouter();


  return (
    <>
      <form action={addUser}>
        <Box
          sx={{
            fontSize: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Add User
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "",
            }}
          >
            <TextField
              {...register("name")}
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              sx={{ width: "300px" }}
            />
            {errors.name?.message && (
              <Box sx={{ color: "red" }}>{errors.name.message}</Box>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "",
            }}
          >
            <TextField
              {...register("email")}
              id="outlined-password-input"
              label="Email"
              type ="email"
              sx={{ width: "300px" }}
            />
            {errors.email?.message && (
              <Box sx={{ color: "red" }}>{errors.email.message}</Box>
            )}
          </Box>
          <Box>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
}