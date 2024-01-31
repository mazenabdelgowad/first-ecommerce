import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../Store'

// Define a type for the slice state
interface LinksState {
	isAcitve: boolean;
}

// Define the initial state using that type
const initialState = {
	isAcitve: false,
} as LinksState

export const LinksSlice = createSlice({
	name: 'link',
	initialState,
	reducers: {
		setIsActive: (state) => {
			state.isAcitve = !state.isAcitve;
			console.log(state.isAcitve);

		},
	},
})

export const { setIsActive } = LinksSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const activeState = (state: RootState) => state.links;

export default LinksSlice.reducer