import api from "./api"

export const getAllApplications = async () => {
    try {
        const response = await api.get("/applications")
        return response.data
    } catch (error) {
        throw error.response?.data || "Failed to fetch applications"
    }
}

export const getApplication = async () => {
    try {
        const response = await api.get("/applications/user")
        return response.data
    } catch (error) {
        throw error.response?.data || "Failed to fetch applications"
    }
}

export const applyForJob = async (jobId) => {
    try {
        const response = await api.post(`/applications/${jobId}/apply`)
        return response.data
    } catch (error) {
        throw error.response?.data || "Failed to apply job application"
    }
}
export const updateApplicationStatus = async (applicationData) => {
    try {
        const response = await api.put("/applications/update", applicationData)
        return response.data
    } catch (error) {
        throw error.response?.data || "Failed to update application status"
    }
}
