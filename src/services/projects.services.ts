import { IAddProjectForm } from '@/types/project.types'
import axios from 'axios'

class ProjectService {
	private BASE_URL = "http://localhost:7777/project";
  
	async getTasks() {
	  const response = await axios.get<IAddProjectForm[]>(this.BASE_URL);
	  return response;
	}
  
	async createTask(data: IAddProjectForm) {
	  const response = await axios.post(`${this.BASE_URL}`, data);
	  return response;
	}
  }
  
  export const projectService = new ProjectService();