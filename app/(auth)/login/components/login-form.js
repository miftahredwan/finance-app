
"use client"
import Input from "@/app/components/input";
import SubmitButton from "@/app/components/submit-button";
import { login } from "@/lib/actions";

import {useFormState} from "react-dom"
const initialState = {
  message: '',
  error: false
}


export default function LoginForm() {
    const [state, formAction] = useFormState(login, initialState)
    return <form action={formAction} className="space-y-2">
    <Input type="email" placeholder="name@example.com"
      name="email" required />
          <p className={`${state?.error ? 'text-red-500' : 'text-green-500'} text-sm text-center`}>
      {state?.message}
    </p>
    <SubmitButton type="submit" size="sm" className="w-full">
      Sign in with email
    </SubmitButton>
  </form>
}