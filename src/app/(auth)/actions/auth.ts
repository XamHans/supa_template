"use server";

"use server"

// serverActions.ts

import { z } from 'zod';
import { createServerClient } from '~/libs/supabase/server-client';
import { signInSchema } from '../components/SignInForm';
import { signUpSchema } from '../components/SignUpForm';



export async function signInAction(values: z.infer<typeof signInSchema>) {
  const supabase = createServerClient();

  const signInResult = await supabase.auth.signInWithPassword({
    email: values.email,
    password: values.password,
  });

  if (signInResult.error) {
    return {
      success: false,
      message: signInResult.error.message,
    };
  }

  return {
    success: true,
    message: 'Sign in successful',
  };
}

export async function signUpAction(values: z.infer<typeof signUpSchema>) {
  const supabase = createServerClient();

  const signUpResult = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
  });

  if (signUpResult.error) {
    return {
      success: false,
      message: signUpResult.error.message,
    };
  }

  return {
    success: true,
    message: 'Sign up successful',
  };
}