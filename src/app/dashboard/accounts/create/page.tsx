"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string(),
  phone_number: z.string(),
  password: z.string().min(4).max(10),
  price: z.number().min(100).max(1000),
  name: z.string().min(2).max(50),
});

const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      name: "",
      email: "",
      phone_number: "",
      password: "",
      price: 125,
    },
  });

  // Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log(values);
  }

  return (
    <main className="flex flex-1 flex-col items-center gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className=" text-3xl font-semibold">Create Account</h1>
        <Separator className="w-80 border-8 border-primary" />
      </div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="bg-red grid max-w-7xl grid-cols-1 gap-4  md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>Account</CardTitle>
                  <CardDescription>Evo account details</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Account Name</FormLabel>
                      <FormControl>
                        <Input className="w-full md:max-w-80" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Acc. Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          className="w-full md:max-w-80"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          className="w-full text-2xl font-bold  disabled:bg-muted/25 disabled:opacity-100 md:max-w-80"
                          disabled
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>User</CardTitle>
                <CardDescription>Info to contact the customer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>User Name</FormLabel>
                      <FormControl>
                        <Input className="w-full md:max-w-96" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          required={false}
                          className="w-full md:max-w-96"
                          placeholder="you@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          required={false}
                          className="w-full md:max-w-96"
                          placeholder="000-000-0000"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>
          <div className="w-full items-center space-x-4  lg:self-center">
            <Button type="submit">Create Account</Button>

            <Link href="/dashboard">
              <Button variant="outline">Cancel</Button>
            </Link>
          </div>
        </form>
      </FormProvider>
    </main>
  );
};

export default Page;
