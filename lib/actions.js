
// 'use server'
// import { revalidatePath } from 'next/cache'
// import { createClient } from './supabase/server'
// import { transactionSchema } from './validation'
// import { redirect } from 'next/navigation'

// export async function createTransaction(formData) {
    
//     const validated = transactionSchema.safeParse(formData)
//     if (!validated.success) {
//       throw new Error('Invalid data')
//     }

//     const { error } = await createClient().from('transactions')
//       .insert(formData)


//       if (error) {
//         throw new Error('Failed creating the transaction')
//       }
//       revalidatePath('/dashboard')

//     }


//     export async function updateTransaction(id, formData) {
//       const validated = transactionSchema.safeParse(formData)
//       if (!validated.success) {
//         throw new Error('Invalid data')
//       }
//       const { error } = await createClient().from('transactions')
//         .update(formData)
//         .eq('id', id)
//       if (error) {
//         throw new Error('Failed creating the transaction')
//       }
//       revalidatePath('/dashboard')
//     }


//     export async function fetchTransactions(range, offset = 0, limit = 10) {
//       const supabase = createClient()
//       let { data, error } = await supabase
//         .rpc('fetch_transactions', {
//           limit_arg: limit,
//           offset_arg: offset,
//           range_arg: range
//         })
//       if (error) throw new Error("We can't fetch transactions")
//       return data
//     }
//     export async function deleteTransaction(id) {
//       const supabase = createClient()
//       const {error} = await supabase.from('transactions')
//         .delete()
//         .eq('id', id)
//       if (error) throw new Error(`Could not delete the transaction ${id}`)
//       revalidatePath('/dashboard')

//     }
//     export async function login(prevState, formData) {
//       const supabase = createClient()
//       const email = formData.get('email')
//       const {error} = awaitconsole.log('Creating transaction...')
// export async function createTransaction(formData) {
//     console.log('Validating transaction data...')
//     const validated = transactionSchema.safeParse(formData)
//     if (!validated.success) {
//       console.error('Invalid data:', validated.error)
//       throw new Error('Invalid data')
//     }

//     console.log('Inserting transaction into database...')
//     const { error } = await createClient().from('transactions')
//       .insert(formData)

//     if (error) {
//       console.error('Failed creating the transaction:', error)
//       throw new Error('Failed creating the transaction')
//     }
//     console.log('Revalidating dashboard path...')
//     revalidatePath('/dashboard')
// }

// console.log('Updating transaction...')
// export async function updateTransaction(id, formData) {
//     console.log('Validating transaction data...')
//     const validated = transactionSchema.safeParse(formData)
//     if (!validated.success) {
//       console.error('Invalid data:', validated.error)
//       throw new Error('Invalid data')
//     }
//     console.log('Updating transaction in database...')
//     const { error } = await createClient().from('transactions')
//       .update(formData)
//       .eq('id', id)
//     if (error) {
//       console.error('Failed updating the transaction:', error)
//       throw new Error('Failed creating the transaction')
//     }
//     console.log('Revalidating dashboard path...')
//     revalidatePath('/dashboard')
// }

// console.log('Fetching transactions...')
// export async function fetchTransactions(range, offset = 0, limit = 10) {
//     console.log('Creating supabase client...')
//     const supabase = createClient()
//     console.log('Fetching transactions from database...')
//     let { data, error } = await supabase
//       .rpc('fetch_transactions', {
//         limit_arg: limit,
//         offset_arg: offset,
//         range_arg: range
//       })
//     if (error) {
//       console.error('Failed fetching transactions:', error)
//       throw new Error("We can't fetch transactions")
//     }
//     console.log('Returning fetched transactions...')
//     return data
// }

// console.log('Deleting transaction...')
// export async function deleteTransaction(id) {
//     console.log('Creating supabase client...')
//     const supabase = createClient()
//     console.log('Deleting transaction from database...')
//     const {error} = await supabase.from('transactions')
//       .delete()
//       .eq('id', id)
//     if (error) {
//       console.error('Failed deleting the transaction:', error)
//       throw new Error(`Could not delete the transaction ${id}`)
//     }
//     console.log('Revalidating dashboard path...')
//     revalidatePath('/dashboard')
// }

// console.log('Logging in...')
// export async function login(prevState, formData) {
//     console.log('Creating supabase client...')
//     const supabase = createClient()
//     console.log('Getting email from form data...')
//     const email = formData.get('email')
//     console.log('Sending magic link...')
//     const {error} = await supabase.auth.signInWithOtp({
//       email,
//       options: {
//         shouldCreateUser: true,
//         // redirectTo: 'https://baaji-tech-finance.vercel.app/dashboard'
//       }
//     })
//     if (error) {
//       console.error("Error sending magic link:", error)
//       return {
//       error: true,
//       message: 'Error authenticating!'
//       }
//     }
//     console.log('Returning login response...')
//     return {
//       message: `Email sent to ${email}`
//     }
// }

// console.log('Signing out...')
// export async function signOut() {
//     console.log('Creating supabase client...')
//     const supabase = createClient()
//     console.log('Signing out...')
//     const { error } = await supabase.auth.signOut()
//     console.log('Redirecting to login page...')
//     redirect('/login')
// }

// console.log('Uploading avatar...')
// export async function uploadAvatar(prevState,formData) {
//     console.log('Creating supabase client...')
//     const supabase = createClient()
//     console.log('Getting file from form data...')
//     const file = formData.get('file')
//     console.log('Generating file name...')
//     const fileExt = file.name.split('.').pop()
//     const fileName = `${Math.random()}.${fileExt}`
//     console.log('Uploading file to storage...')
//     const {error} = await supabase.storage
//       .from('avatars')
//       .upload(fileName, file)
//     if (error) {
//       console.error('Error uploading avatar:', error)
//       return {
//         error: true,
//         message: 'Error uploading avatar'
//       }
//     }

//     console.log('Removing old avatar...')
//     const { data: userData, userError } = await supabase.auth.getUser()
//     if (userError) {
//       console.error('Error getting user data:', userError)
//       return {
//         error: true,
//         message: 'Something went wrong, try again'
//       }
//     }
//     const avatar = userData.user.user_metadata.avatar
//     if (avatar) {
//       console.log('Removing old avatar from storage...')
//       const { error } = await supabase.storage
//         .from('avatars')
//         .remove([avatar])
//       if (error) {
//         console.error('Error removing old avatar:', error)
//         return {
//           error: true,
//           message: 'Something went wrong, try again'
//         }
//       }
//     }

//     console.log('Updating user avatar...')
//     const { error: dataUpdateError } = await supabase.auth
//       .updateUser({
//         data: {
//           avatar: fileName
//         }
//       })
//     if (dataUpdateError) {
//       console.error('Error updating user avatar:', dataUpdateError)
//       return {
//         error: true,
//         message: 'Error associating the avatar with the user'
//       }
//     }
//     console.log('Returning upload response...')
//     return {
//       message: 'Updated the user avatar'
//     }
// }

// console.log('Updating settings...')
// export async function updateSettings(prevState, formData) {
//     console.log('Creating supabase client...')
//     const supabase = createClient()
//     console.log('Updating user settings...')
//     const {error} = await supabase.auth
//       .updateUser({
//         data: {
//           fullName: formData.get('fullName'),
//           defaultView: formData.get('defaultView')
//         }
//       })
      
//     if (error) {
//       console.error('Error updating settings:', error)
//       return{
//         error: true,
//         message: 'Failed updating setting'
//       }
//     }
//     console.log('Returning update response...')
//     return {
//       message: 'Updated user settings'
//     }
// } supabase.auth.signInWithOtp({
//         email,
//         options: {
//           shouldCreateUser: true,
//           // redirectTo: 'https://baaji-tech-finance.vercel.app/dashboard'
//         }
//       })
//       if (error) {
//         console.error("Error sending magic link:", error); // Logs any errors for debugging
//         return {
//         error: true,
//       message: 'Error authenticating!'
//         }
//       }
//       return {
//         message: `Email sent to ${email}`
//       }


//     }
//     export async function signOut() {
//       const supabase = createClient()
//       const { error } = await supabase.auth.signOut()
//       redirect('/login')





//     }
//     export async function uploadAvatar(prevState,formData) {
//       const supabase = createClient()
//       const file = formData.get('file')
//       const fileExt = file.name.split('.').pop()
//       const fileName = `${Math.random()}.${fileExt}`
//       const {error} = await supabase.storage
//         .from('avatars')
//         .upload(fileName, file)
//       if (error) {
//         return {
//           error: true,
//           message: 'Error uploading avatar'
//         }
//       }


//        // Removing the old file
//   const { data: userData, userError } = await supabase.auth.getUser()
//   if (userError) {
//     return {
//       error: true,
//       message: 'Something went wrong, try again'
//     }
//   }
//   const avatar = userData.user.user_metadata.avatar
//   if (avatar) {
//     const { error } = await supabase.storage
//       .from('avatars')
//       .remove([avatar])
//     if (error) {
//       return {
//         error: true,
//         message: 'Something went wrong, try again'
//       }
//     }
//   }



//       const { error: dataUpdateError } = await supabase.auth
//       .updateUser({
//         data: {
//           avatar: fileName
//         }
//       })
//     if (dataUpdateError) {
//       return {
//         error: true,
//         message: 'Error associating the avatar with the user'
//       }
//     }
//     return {
//       message: 'Updated the user avatar'
//     }


//   }
//   export async function updateSettings(prevState, formData) {
//     const supabase = createClient()
//     const {error} = await supabase.auth
//       .updateUser({
//         data: {
//           fullName: formData.get('fullName'),
//           defaultView: formData.get('defaultView')
//         }
//       })
      
//     if (error) {
//       return{
//         error: true,
//         message: 'Failed updating setting'
//       }
//     }
//     return {
//       message: 'Updated user settings'
//     }

// }


'use server'
import { revalidatePath } from 'next/cache'
import { createClient } from './supabase/server'
import { transactionSchema } from './validation'
import { redirect } from 'next/navigation'

export async function createTransaction(formData) {
  const validated = transactionSchema.safeParse(formData)
  if (!validated.success) {
    throw new Error('Invalid data')
  }

  const { error } = await createClient().from('transactions')
    .insert(formData)

  if (error) {
    throw new Error('Failed creating the transaction')
  }

  revalidatePath('/dashboard')
}

export async function updateTransaction(id, formData) {
  const validated = transactionSchema.safeParse(formData)
  if (!validated.success) {
    throw new Error('Invalid data')
  }

  const { error } = await createClient().from('transactions')
    .update(formData)
    .eq('id', id)

  if (error) {
    throw new Error('Failed creating the transaction')
  }

  revalidatePath('/dashboard')
}

export async function fetchTransactions(range, offset = 0, limit = 10) {
  const supabase = createClient()
  let { data, error } = await supabase
    .rpc('fetch_transactions', {
      limit_arg: limit,
      offset_arg: offset,
      range_arg: range
    })
  if (error) throw new Error("We can't fetch transactions")
  return data
}

export async function deleteTransaction(id) {
  const supabase = createClient()
  const { error } = await supabase.from('transactions')
    .delete()
    .eq('id', id)
  if (error) throw new Error(`Could not delete the transaction ${id}`)
  revalidatePath('/dashboard')
}

export async function login(prevState, formData) {
  const supabase = createClient()
  const email = formData.get('email')
  const { error } = supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true
    }
  })
  if (error) {
    return {
      error: true,
      message: 'Error authenticating!'
    }
  }
  return {
    message: `Email sent to ${email}`
  }
}

export async function signOut() {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()
  redirect('/login')
}

export async function uploadAvatar(prevState, formData) {
  const supabase = createClient()
  const file = formData.get('file')
  const fileExt = file.name.split('.').pop()
  const fileName = `${Math.random()}.${fileExt}`
  const { error } = await supabase.storage
    .from('avatars')
    .upload(fileName, file)
  if (error) {
    return {
      error: true,
      message: 'Error uploading avatar'
    }
  }

  // Removing the old file
  const { data: userData, userError } = await supabase.auth.getUser()
  if (userError) {
    return {
      error: true,
      message: 'Something went wrong, try again'
    }
  }

  const avatar = userData.user.user_metadata.avatar
  if (avatar) {
    const { error } = await supabase.storage
      .from('avatars')
      .remove([avatar])

    if (error) {
      return {
        error: true,
        message: 'Something went wrong, try again'
      }
    }
  }

  const { error: dataUpdateError } = await supabase.auth
    .updateUser({
      data: {
        avatar: fileName
      }
    })
  if (dataUpdateError) {
    return {
      error: true,
      message: 'Error associating the avatar with the user'
    }
  }

  return {
    message: 'Updated the user avatar'
  }
}

export async function updateSettings(prevState, formData) {
  const supabase = createClient()
  const {error} = await supabase.auth
    .updateUser({
      data: {
        fullName: formData.get('fullName'),
        defaultView: formData.get('defaultView')
      }
    })
    
  if (error) {
    return{
      error: true,
      message: 'Failed updating setting'
    }
  }

  return {
    message: 'Updated user settings'
  }
}