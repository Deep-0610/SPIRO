import {create} from 'zustand';

import axios from 'axios';

const API_URL = import.meta.env.MODE === "development" ? "https://6797e1b65d63615c3c38165e--deluxe-semolina-615644.netlify.app/api/v1" : "/api/v1";

axios.defaults.withCredentials = true;

export const useAuthstore = create((set) => ({
    teacher: null,
	student: null,
	isAuthenticated: false,
	error: null,
	isLoading: false,
	isCheckingAuth: true,
	message: null,
	email: undefined,

	


    login: async (email, password) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/studentLogin`, { email, password });
			set({
				isAuthenticated: true,
				student: response.data.student,
				error: null,
				isLoading: false,
				isVerified : true
			});
			//console.log(response.data.teacher);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
			throw error;
		}
	},
	logout: async () => {
		set({ isLoading: true, error: null });
		try {
			await axios.post(`${API_URL}/studentLogout`);
			set({ teacher: null, isAuthenticated: false, error: null, isLoading: false });
		} catch (error) {
			set({ error: "Error logging out", isLoading: false });
			throw error;
		}
	},	
	StudentLogin: async (email, password) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/StudentLogin`, { email, password });
			set({
				isAuthenticated: true,
				student: response.data.student,
				error: null,
				isLoading: false,
				isVerified : false
			});
			//console.log(response.data.teacher);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
			throw error;
		}
	},
	signup : async (email, password, passwordConfirm) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/studentSignup`, { email, password, passwordConfirm });
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
		} catch (error) {
			set({ error: error.response.data.message || "Error signing up", isLoading: false });
			throw error;
		}
	},
	verify: async (code) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/verifyStudent`, { code });	
			const { user } = response.data; // Extract email and user from the response
			set({ 
				user, 
				isAuthenticated: true, 
				isLoading: false 
			});
	
			return response.data;
		} catch (error) {
			set({ 
				error: error.response?.data?.message || "Error verifying email", 
				isLoading: false 
			});
			throw error;
		}
	},

}))