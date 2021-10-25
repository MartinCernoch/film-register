import axios from 'axios'

const apiClient = axios.create({
	baseURL: 'http://localhost:3000',
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
})

export default {
	async getList() {
		return apiClient.get<any>('/Movies')
	},
	async getItem(id: any) {
		return apiClient.get('/Movies/' + id)
	},
	async putItem(id: any, film: any) {
		apiClient.put('/Movies/' + id, film)
	},
}
