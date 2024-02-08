import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './state/Store'

interface CartCountState {
	value: number
}

const initialState: CartCountState = {
	value: 0,
}

export const cartCountSlice = createSlice({
	name: 'cartCount',
	initialState,
	reducers: {
		incrementCartCount: (state) => {
			state.value += 1
		},
		decrementCartCount: (state) => {
			state.value -= 1
		},
		incrementCartCountByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload
		},
	},
})

export const { incrementCartCount, decrementCartCount, incrementCartCountByAmount } = cartCountSlice.actions

export const selectCount = (state: RootState) => state.cartCount.value

export default cartCountSlice.reducer 