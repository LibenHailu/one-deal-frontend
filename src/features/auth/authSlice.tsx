import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { User } from '../../app/services/auth'
import type { RootState } from '../../app/store'

type AuthState = {
    token: string | null
    refreshToken: string | null
}

const slice = createSlice({
    name: 'auth',
    initialState: { token: null, refreshToken: null } as AuthState,
    reducers: {
        setCredentials: (
            state,
            { payload: { token, refreshToken } }: PayloadAction<{ token: string; refreshToken: string }>
        ) => {

            state.token = token
            state.refreshToken = refreshToken
        },
    },
})

export const { setCredentials } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.token
